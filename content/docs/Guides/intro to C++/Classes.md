---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIBRFPSL%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T041301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH2dZnGX2I93SZl9M7zloaXfeCiA6r2TmwvtIv%2FXHNSQIhALTEINKlJ%2FiMyaYM7WXMPO2IGP1LQlG1yD5YUtUfL1fgKv8DCD0QABoMNjM3NDIzMTgzODA1IgxvKVSPAPvpnonX8s8q3AO9AlnJ2nTUIeZ6CThPA%2B%2B9wIYBO1RNFuqx7zE4K7hHcvIf358e5JUidwObRRbX%2FotTbk1Tkk0ThD8PD0IqYo4QBm%2FJPOlSY%2FYAGxhs8umhSb1wGbQf87mtmBhquKwl3kCjKLQ4dS68vCjC8DjUgpPemNX7lHCq%2BoM%2BM5%2FJ4h2r%2B8cjXWgV%2FLijgEZeWZfCS%2BqzwkD%2F6pPkVT4sareFDBmtINYEj%2BN5tWpoul58j0ONt%2FnCXMqr0UY2sZATx71nGsOF%2BMeBBpjTF7mI5LWQ6ff1GMrDSydAyyqtPk%2Fij367HFxcD18xCa5IP4CQ7OL7TGRqZwTjCAqZxwNgJI90YNjE8%2Bbelc3lRxVBqQtLew3UxuaCrI6L3H5vqi%2FEdARO%2BdoJbgudMX%2BynKhTBNJWFx2vaqIjcAfJUwcIH0lkbe7%2F78p1pQg0HkwoNztM4YPtJ%2FmveESuuHDm6gOAaOViSL0uVblbEkLb4VKdIsAjGozYNy1Chkt4h1PFAbbcEPFkobNWkHYQJHyxIiJMOEEzNdVk54uyeZL8oLGvuZfjspI6tmC6pmRp7qFQuqlF%2BNyBBBbUs6c82L%2BoYDuRUfNlALrAJk%2FDgCK1Ufm8zge0Q7230b0nmzo4MwlNv9lwdzDm75rBBjqkATfztUgKxU2Oads%2F3XlOc%2FET8GpEYK8TUSDZcvvxsPuJQTdCJT6xwNElHBKzy3XBWLtK6r9MbidoZ63nWvzdV9Nb5kPCMuNfQKc5dlfREWkupxg%2BJ2fNHzNucjRnhmXFmfwkscX7Xw250CNhsRpdoJdcQIPcq0A%2FOnNlFuaSYw%2FSsay8tmZ2UIFj0EVZ7J7p%2BqnI8wGnbdoQcUfJK0Fijog6XP2w&X-Amz-Signature=f4e63cc5a85e48459d176bcbede3c29d14f42019130def5868f251920971c400&X-Amz-SignedHeaders=host&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
