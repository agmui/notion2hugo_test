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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD6TOTEV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T031235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2F77rUsBboqg%2FjSqBXiU8RJOA%2FfSOR1chzciTs54UprAiB6KIJFlrHqnmGjdHtS%2FxNxx8mWEjMRoAYMgwazjHt7riqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM266I%2BWHbhj4%2B2SDXKtwD68WgNL4mVyzNSDSQHAOmwnP9w7da8gApX2uDV2LXzlodCNOncJc0rl1QRgV0Tjmkmfs7Z2jMWnlOhg4Pu%2BhzW4qInK7Sv5EKzBsuv3eZO6AN1pZ8Fqy41DZ6cDUKEhZuTYiPYISF%2FepKRu6eWB74wzYzPHmJGPPXUtGJcrjXau3TcymCmvVtdk2j55i%2FlRGQfCaxrV2qK9OnuXTFzZk4KOsMPeaO0k4L3H8sLIVjSXp5CnFQ5wO9COrzFVWOSa7U3cKZj6keR5OeqYenaxXQgZHHxhKrfUFZfXdrQh8bZuvwQ7rJ42hmp9UaZRdUtxljv%2BFmcZePdm%2F9qE86fQ%2B%2BCRUtscTDua0CPvSJxG45P8X%2FuHlm0w2NcXZ%2Fk9mSwGvXF4Y7WIQlVnEfl%2Bqa%2FeZZ6EMXt4IvKipHWj3eEAxFUSe9ElZiYJA7smbGVBBmM16AZupRPypyfrKnP58MgpVsVPTHHvDmK3quIKTDGlvjQQqphZR3crbVRpeLQQI%2FJsTiHcJu2FQuwQ6VtvcUXL5%2BSsyWZkmgy3VO56kPqZlEwUGEt2QOJ71bI2%2FhZMpC8KiO8B2xWT6t1ctWFourDgYP4nCpsK4nkuEkutN7K9brlvW55JqG5%2B0wT%2B%2BrSeYwy%2FaqvQY6pgF6mrtbVDc8GfmvWGKG%2B5PZsfeuaLjzDyU4AbCu1MD9xRNGzAQ%2Bti4CdcXpk1V2Zqwnoj%2FM7PlExBz1zhAj4EBGe%2FiE5eAmbfE2DuMYzBBy4F9i9S4lMR9hEJGRVcgF42IFX2YtF5lyciFGaphQeMZVIRvMpzbrnfKDjvqM9ENJ%2BNb2%2FzE9KmTAieQ04ms4blt%2FKTXm02SeA7XsNs11fciuKPGLRvJR&X-Amz-Signature=4840e1398cf927c0dd2039d10cc0a2ab61077a2b0a5584d75582192ae2ee6536&X-Amz-SignedHeaders=host&x-id=GetObject)

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
