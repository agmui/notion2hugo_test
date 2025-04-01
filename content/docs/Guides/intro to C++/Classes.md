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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERNXBIZ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIHl17hELkClH3jmtJ%2FM1QLehYgbj%2FgvSVDD9nUfoDEoBAiAXBHp%2FfS2%2BdQIW%2Bh5PqD7VbbU6CWP0scyDdmOzSP1VJyqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlQgr%2FQ4ryxuyKIuGKtwDhucku8KwXnKN2PTXdH12%2FFW2Bj2DAhQFRYKm7TG9NdAdzVTI%2Bc4n%2Fm%2BeuQY5rVALyTuT%2Fu9rrT48Zy0upv0TYjYL4U6eQdhhRVlv6qsQRkmhbrcY2Ryot2Vco8UjBiKxOza9S8GvAoydz6eb26fwnGb49utfKIMbtseNkVE1r0dUreq0u6WxbrU5Nu6XPSVsI4Orgpe%2Fesi6U6DCGld7eG6Y9Iaz4foe7yLninAl6O0mnPKYRbkz0Ftn7E%2FN5blZY6%2BeHAOyoruCSKmb0rvkaCUrwqCC0d6sAoGJ4FOudkFfOCgYideMNMgF8H3umjXIHRppBQREv943Ho74tKEYXcP%2FLWFJqEXFTQ%2Bc8EN0XtDEXMGZsM0fjs%2F6qxU5wH44B2%2FdoF7TKkCSJM77387ZbsaojAsCn8UPLGTAeiwmTLFB91%2Fe4ish%2FGp%2BIgZooYgynzUvNibfqUSSCjigH%2BOBI49woIJ%2BBhQ232iehZIw2YKJeW8XBTUmdewAD1a6FkSLRd4jzcFQhCphUJ4WWoSId8Nv%2Fjl1A27pU7drCsaQTOAGUAewDZToWUSClVdlh0mcl1yS%2F1Yx1NTYpTJWhXzabVsAyUxXjsmICk6etgB5eknKNyyqt5WQdHTlNlMw4oOvvwY6pgHnT%2BWWvEUQoKsQsfkX%2BCaYHwM2yIvq%2BQai9Q8t500ZpauW7k3YVgDjo2grt8%2F0aHW3plf0F1mZWacKUoDt0Qv5uFiAyuxE6%2B%2Bd%2BHvofU16G%2BMwLCzzBOfyoSDlca9zSx9mwJhLE58WS%2BhgBEeCHpsVY%2BXfgLy%2Bhc0jwM2UDU9HNp8ieUdqBYiFiDGXzCgoHfYcGrbPQlayNgF6VG5CuZLlXoOrsx%2Bj&X-Amz-Signature=aafbd7e8b46dea76845d32c2ba3bcf0f4af21586fd5f0a7436c7ff3ebecc6d98&X-Amz-SignedHeaders=host&x-id=GetObject)

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
