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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUEJNPIO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD96cWWO8h%2Bj7G2SS5ZvO0qTOJPVs7sN%2FYgaxNIPBxJJwIhAIwETS5NgwQQ36xjWmYBkgm9CvRfg85qMtIT6s87huS8KogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxj9j%2F%2Bnv%2FMMx8Hf40q3AO9KiZUJSrx4jOzE7oHdXI505fjmxwkYBkeh1Jj%2FUzCd0UHiqprMgeTeJ7uarOoOSNdrSutSWKjkojmZTSF6R8MH62mhj6j20MjolSSiXqKbpN81%2FaH%2BId41yCaK5AL4%2Fd3DfgGRZXmtNivNiOyDzFtgtI4jIcmQ3NeihUboekYo4PAgpsYZdPqwhmucmr1nPMarJ9Vnr%2FaC%2BdzJL5bsOjsx8JjpHNXgIXcjQK9ly8waQAYa3hyaP9oW8PuuoIQ5nmG7o%2B2rdvnzSNzA9MGyqGC5MSfstzpw%2B1UfcexJGHsVR8LiUzh294gESVc4Me7j3vd%2FkyGwAmU8qhIUV4iO2lHfSe2HacnNrUqsCIcRBSCGqiXXu0PFEYKTSIPQclEE2adnsH81RkRLo6MYQAZC12bveudbfhqtGfK4uR1uQ81X%2FWwIR%2FAKtO8gYm9pdw4gszfuwWnUXvVwCWnUMwpWWcVkcI3iuXhc2IFbfvY%2BU2wqCAKMRiW2rgKE5HL8DCLcS6y35AIHmMtQYIckj5Urj9HH%2BYJggJvscgllcYfLpVDNfXH2%2BKozfKXEjyGgn6x3RDuha6oIcnkMjQnYtMS0yEo35p%2F3C%2FLfQq3v17OO0sLatA51K6aLB53WKZNxjD5yrbEBjqkAS6ImklksY0nTcvORR%2Folx4WQuxA9UEfGWrnzMGCkcib9kY%2BoMvqung3AIDojxe2KWgIFZO9DFUyXcDrd58eDPSmQ4R9vgcfcIqlBQze7793TVs%2B23i3oT803L7%2FWwgsmkA1f9NxF6UlblkJjf3F%2Fhn4SzM2vfBsVRZH2UYeQ7H5X%2F86IyFwXtNOF6Vnl%2Fdogewf6NNYVhDpPLgyhx3NahO%2BAUBw&X-Amz-Signature=5d7f2c55c382de19f0b9846a187a2839a030d15bc3998a3eed8a9ed0a22590f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
