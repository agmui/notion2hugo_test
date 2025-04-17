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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFKONRO%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T131936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGjla52XS%2BSt%2Fta5N2E5AMAWDipYBb7fMSD1%2B0rZ5x7SAiBb3vxt0qPpJXK0axqRIv4KcCpZLHCsblM%2BKJk49rqOWir%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMEFHx3TTY7H7HEtmcKtwDDfhPpWcn3u6f9JoPeWk4BgmrmIGjGNtm2Yx3YGMrVYGRwgFu4yvDUXFCAVWzvqtoCE2HjXggOhKyHhfNoqYoqxLl7ORMFerUYb9zwxROklJ021Rg%2FGolBD5bvgKkLkQAQA5%2F0NmALk4NFcmfFdJx9gaOGCYaDS0XJW9vJBv7pETawsarK68ok%2FiV1wmu3Tj8LWPl34sus%2BVEn0r1Ighaphpyps5goFUxpRlx%2Fp%2FvAr551W%2Bqv0CXuGgccV4cIvbzx4Qou%2ByDVJ6cXra35ZuXMam0GeOao2R9sOm2%2Bhe%2F%2Fki0ZgayYHpJTALZVRv1yjer%2FC11Mfh8XTKaz5bFYibKr6FBX9biZF%2B8tQNUlB02jZIfFnQeTjc3dEnoXNT1Hfygqx9JH1M87%2BGBnXhtRW0MHV5X7XmfYFbmcU8mD0FxVwVC61itK8G3jCuMyhEp7du8YT4cUnnKV7BBCisXySN%2BxFRaCfNZCODOymZFdG%2BwcmQKGxXV1oIeRJlHqIGpVFKDE9CliFrJCik3McKMiYWH3%2FpFLlrprpIsQJGPbL4QGXdvfpdV9zVvG3BFYg4T0ez%2B8USdIcoqkECDcHTMwZJ5Qdpo5LzgnfAsKeR4Qpn12kUNVTIM5yx56%2FVvvDsw4PyDwAY6pgFcIleLZgD9DOB93FO5Lc%2FGRvxsBlpyQt1qUuZhxdpgKcflBIrvYTHQNNKxj3asYNTDisnqOto1VXzeP9Jjmx4Bwio5eDQv7Qm9EmUQUMVBVKb%2FxPT1Bcb2ftUdB8imxLtKhTczEFyRBWE3hrB%2FTQVWEealidwfcLjhBnm8HrRIVbDij3s5HY0hfAm05DBPjnArjyLJzZOWCdw%2FyHJCp%2FhnTCTMVOeU&X-Amz-Signature=8f32e868a75973f6b61f6b885ac0722b637227b0664753cfd6ff6bd5388bfe3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
