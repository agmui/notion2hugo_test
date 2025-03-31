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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JN2YCP6%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDPtkKQ6qB9cBlzw6OGq6BnkG1lIn%2Fa5PXhHZZuivQc8gIgHcKcICuEOfDAzMqUjHPCu2tpaeV5LQz4OI9eeLBJkEAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCNDs%2FAAG3dD4bQPCrcAw9BMjgMWgXohUd%2BeqwTGPhKuP%2FzaVUw9cqDsd5HDrOL492cNr5QFeV%2FQVdWJqSnfOD8OZe4ZkXxE1ZCjU3RjwTrHDVm6i8kHhLt%2B5a1%2FHW9JZ3np90%2FDk%2B3NBOVBjhgADR3Bo3AkfgwlrTWKGUJfxy1oiT10HqSKMhlBc88OjcZ5IygZ0mKKiImAsOvWSXh8O6dqI05h2JRKyNfkAnbUhxRQ%2FJCLJd4Dh9%2Bn%2FOJTTmR0YaGxfU2Tq%2BImewQqmlaqm%2B9lMD8UknsEtx2shRyDLU8uorBroC0c6OSCSDg0oq3GKnhDg0Hj3%2B1Yd%2FDnNRfiPkmFgqladDfgznq4enuHLUNIk0ZLVurOcJ5ZJ3Qf7rRyPmcWP6SZmK1tRqGC3Snob2PdmF5G%2Fo6QxAqVr%2BdDINgT7xKjcMXy2fiZ%2BzP5Se1TCH8xv4JRbweLERbYpSwBJDgtxrMgsG6TiZCJ69iwT5cJP%2Fg6pL4Iwn4b6cVfx4K315HQPZNct3mlPmaTjoUcFgjBOY%2F%2FBXVetLCIUMau4EtiUN7N1CMRirIaJbmpuZc0rlT8IJrtXdF2y0Arp6umL7dTLqI5JEZ4iu0brwWTQhSoAwdZC2tk9HYNpTRAL5L%2BpLskNWKycIln%2FX%2BMOOIqr8GOqUBYqJc6kHYEwWpQ4iGzQ9Srn%2FOkIlMbmMJn4uzar5sUnGLTqBv1DEg%2BPosURGGJz%2FsN05A9uyrU3tO48fVbGJJ%2FqaHstDgAYYGkFHURK4B22kNc%2BHDoNkLNa84oW4B88qYjv3ZapklpxgJAeYNRPF9wOcZNvdGsXKKbGwGLP6pOvGPSzXPw3d%2BgInHebRP5b%2FqFoB3i6Kg%2BwxgKbKLEkL8DFyTraE7&X-Amz-Signature=291820f540743567ea8f9d6117c8840db2aaeda1cc2cfc28510ca4c3856de125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
