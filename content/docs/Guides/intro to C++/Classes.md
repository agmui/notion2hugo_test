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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSHP7MWM%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDOLcMJBCkXNd5lWjta0voquR9rLETeh5kBZI%2FlHsoZZgIgLCpezemgT5Jw50pQQCHSqmFiVciTggcd6U7jQLblhg4qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrFfpEdWeIPZsgmfircA%2FoTuIhf4DEe2nF6OSCiOvUr9iyp5U8jETpEjs6V2M3MZM6CaTnikh4uar95ZutSqPLLMqPCg9NfCzxF7xhNBAhjIAzkkeyfkGqxEfGhIyoelTDB98WTCx7jNx%2FyQ45VG5Zy5857HeT1o9U2Ilu58mVlIr%2BB8T9%2FDhRvV6vh9LGFdaq3sv2P2%2BTuYlp0NvF5MR%2FbV0Ergty4j1hnErtw4fw6T7kauVIyuqfVx5aLIIKt6hB5pO%2FcrYnoRHfquINCwF5IE0rUJt07pLAxwv2AU%2BMzkv46BmCx56HjTJsm9uCPVGPbGLUgQggVg1ntO5Wv4KNAhh%2FYu%2FNH5Lt1XLXqEIyVQ%2BmEmU%2F385%2FKd89QwmIPKKFDY2ICmhSfN0xkCAk8dikhzPItpRoZ9fZtXg4y8CbwGwT1cKZRnuB6nnsR0KlUJZvLXspVJP6e1aZ92PFpV1ylqqBuN%2BZ1lmJABleh%2BNlhI8KiOFMAY55hZN7boO1RAjI4302J9sQ%2F4zs106H%2F5IlTmodQaBjhGv1jTpnbEnqOpu0fQRxgX6uL65a3rOqogD2bJTJH%2Bwy8RDtrE%2BU7Pfd7olctFFy%2BNm%2Fh3GeGe1FQeIm7BTk5FmgLD8i55p8Ox30SNxk6OdMIhMPmMP%2FP6MMGOqUBBIEHukOKBH5M7HKXjzYBXvi933PjTdNh37urDCHBQn%2FlLw4sh6iQTYojRjiqnMY0VfP%2Bvoid5hmySW0mxJjC4FP%2F1EVTY33g0S8TQw4adzjtc%2BoQSBVCoJzhtdjCWf%2FE9a0U46yTLKRddpv3jI%2FBN3dSYBs18lplf2TNdBCe7%2BZcAklEktzZRvMbbrttolp1Uhgne0TUu%2FodjKoXGsuIz%2BA7YCOM&X-Amz-Signature=ca343eae25eb87dfed6f373dfc940233bca0057c1f8c85362e515998fd9c22e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
