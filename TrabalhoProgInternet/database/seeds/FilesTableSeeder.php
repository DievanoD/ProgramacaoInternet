<?php

use Illuminate\Database\Seeder;

class FilesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\File::truncate();
        factory(\App\File::class, 2)->create();
    }
}
