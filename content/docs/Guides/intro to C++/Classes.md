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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CQQ6HCC%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHecOgJVjC6CYLCPQOPEffYup1dNGWLysGyJRHVWrjIsAiEAj0vM3J2wKS7NwjQBNscNSm%2Fr3YOtNRUcfKvJJK%2FL8SEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMp1qcP97oBwEKdiUCrcA2HX%2FXWbXJRe4q4inUf69ys%2BENbHMZ%2Fm7m%2BqSmDVQLdvCFOXXZ4QXfL9BJ%2F1VKGDc8n2OaS5YVQurzzd39uRl2ZU3uzzyxtwE%2FqGaZzvBoRqgil0%2BRu9wZgM6f3Qt1qnGF4U7QOASlcg3X1VLog%2BnPWv1lzvTgZBRUgeXEQuOeuXntztpQ6033bPsaHtWKk%2Bt%2FsAFxMeBESd0Vm6A4CSWnFs1tZoTCOqC1KYpp97gmBcfhNG26rxgWZihsZQBFUPGqmtYEz4W%2B197gDJd%2F61jlyujc3PGKLhLh%2BjTjvzik4b8xY1oTv8%2F7gWcd9PQAu6rgpOP%2FWEbyjDxWyBxoosK1gS0Gnu4zBniK2ESIddduMEJmwhCZR0jNxtnmzyKSrfFwp1Anzb6lxo2XFaqMS0kRoyPXWeAVIsh9SwZ93WkHPkrtv3F0Xp0tki%2B5nczxlc9egIiSxMcOWAVYD5FetTz5h2Negl%2BgJE5EbqPERtxSSwmnf3C9Zbav8NIaFbI2sDLxYc3MMJfq9z0G%2FjBdf3icATzTcXedCR2qzFZwa9mgcoHhiKFzMs9XID7JplHUckfloeMBJhbYxchSjXi9RgojDbyVF8KI%2FbclOPJObuJjoI8JLbjeDh7dUVvizEMIL9yMMGOqUBdGhfnp2w2zVs3APTMtEunHIACorvWIL63sMwwywFg7zMCz6s2awQ9ia%2BmOZMneAJODnT1pGJM1fUtYhb7ACJV%2B5K9jRg2LkgMg6Iv7Y5SbAXvgUC3kvaf4wilrEWVr%2B7%2FcwMbg5yQh7jBlC9FooScaTGPbh3EKfEOhOZ81QagNuX2tkNww86AtY9Fg9NjKS%2BekdBQrkXgfy0lHnfQZfzUKh0xusR&X-Amz-Signature=885bdfe7774c1d9ca3e63c76a10c6404c8c47d7b58b880d5a299db1de84b9587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
