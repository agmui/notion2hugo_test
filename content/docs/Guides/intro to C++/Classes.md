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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P2BMQOT%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASKUAsIJbRuAnDODR7nDU%2F15kx1cqF4bfaVe%2Fq2QtNeAiBqNJFSz5E0iDheWcGFnO5qJ4McQu2D4ePhTMcBL%2B%2Bn%2Fyr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMyHGq%2FeLmdbBsCoSAKtwD%2BuLKvIgEDj39Mx%2B9ULBSFwI45DzVa8535laBE45D5zVtpehfEcf%2FtuzmELB5l7YVwksZHpQKvTHvCvGQSPsl4pjD7eFFgOhrrHlcZIxV2f0MoiNyVbRpZRngHEb0MH2OlpJQnWKNV1hR72w6a5d1sJrHg9kxD0JKGXzcDv4srSsj6DcBsFh9RCsN%2FchzZdKdnEEhOo4TLTswFvJoLY6yaNW%2FQztCOzQnbW92yKLN3U43bi%2FjRwrSIi9n4EplqelWa5Gf5tTjPHEEeKOn7YXWkkgGufRsMSunOFSOptqqHcWbVAs90Qa5pvmzqkly2ftT0gOSrFeIHrB4Rq%2BoLyjNxxLR%2BOj%2FMzLPvfx7wEJ%2BlmBfL66dDlF3POUNg4MXe0qXMb7g4c6zpnTswtInGLmymtiO4oFF0mjbEJkmwqAMOWyub9lxH00mGkkrrJK%2BYASLMsSKw81c7KygZJeHwWgk1ZpzgEIEsxhELAl%2FHQd0cy59sUM6qbz9ju5c5TSmiTowP3Bwc5HklQsmKRa5Zie2uj2h44Dsxn6f3P%2BRmXkIubiIgTZmWrKiDP%2FayET7C9iD2ebhnsm1G6y9gY7ukiXhmBT597S%2BewjCOHfxe3vIyhBx6AVNN0JZWAqJGSEwlsnOwwY6pgE8U8UEUINirlaHZunNGpJSuhO3%2BZcEWW%2B0BepccL1ag5jPriU9qw2AJY6H%2BHw6NtJ5RN1Aj%2BPFSRK%2BsK9HLkFrdeQZV7Hlw7LZR%2F7UE9lPLORZl2EZUqdY5uAFYBzegojzOKKtRpJQZ8FYLsX5941nonhiGtEIH2Ren916KqnKv9LJIE%2FWqZTKo9oHfL4k2b8MX3LrFZfpvoYATiiqzmithWGxW8%2BK&X-Amz-Signature=141b9eda8abf5fe46dc271ea2fefd1b4693e475a620f6aa5aac8e29c7d5adc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
