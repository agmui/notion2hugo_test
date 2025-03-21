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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOVWRLW%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIHWmhFOzfWAXiAi4pSZ9t7vsXZ4yiCYjU9w0R7ACLatbAiAmHfBOVApM7T6Lc5%2B8U2xpJgpvTFq%2Bn11nENXs5y5s7yqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF5%2BWpU7BmRpoMJUTKtwDasydM6mTyxvOcpq2csZDdnkXJ565dtFWx1g8r7vmeVrtVe2OAiMYe6Ad60OZP5P3d4G64%2BB3FYVA0IhjvBK2nfm4wgWjWWXHK6mQWshgXVOqqMVwHDotnTvDwv%2BfnuhyWwy4mLJ%2B63EO%2BT%2FrpQJN74inA3w7PWzULSyaZtY2yb11RYqi6BDczfqJBH3p8BtDiFsHzEEibLzguj6YGxJuRXW5lnE7zCrLJoVH%2BULCCa%2FKgN4zGc7HUUqrw5kRcXOysIqU%2BHlz8UAn%2FL1kyrQeIwvXt2lNrg8cAVdXS7Vdin01wy0Uu6%2Bem4O6nQtWlwBWCg8gQmGxAeJ50TXX7vDr1V849QlWbvEucYs4rmZcqFw8QRoVdUygra1wNjVWmK1Wreb3TgYPJkL2hlxukbDQSqhw4emYgHmT47HMTJ1eLQajaLOkw%2FTNpsXWA%2FMB9sk1it85e%2BeVx46AFwoaSYgB2FQSkiQgHzUxCiT%2F8AwhSZ4TcS75cMzxZGWhTO9DWkcs5PNgAX2GAVYcSTDhgwvXub45jYZI%2BVD1bbwCeXAnl8UbvrSCLWVtiopDUowX5fMCKdxZqe%2Fw2VqxTvIqaXUKbvv7Jjw5x31ONYgEmNmApWziJn%2B8cwAOWlYMjNEw07r0vgY6pgFWXBP4MLVbuZloNHMAk3g1GklruZtN7UkOa6F5A%2BVIXiw8DDDEFtSLrocZc%2FOrvct%2Br5ml3K%2FrjYx0201qcgIDp0GNiJjBHQ7RxWjE1c6FSlXWWpga5OTa0dR6FLArYiqJcLWZPA%2BEfdMlVg2PART%2FRmINONVGWlMVKftTAengfBi7aBQFska8MyqRVAdnUewCFknAc3G10N8orYPviXSvUfwBclIU&X-Amz-Signature=a78a24b562d3cc92557415fbf547b6ac2e6f54fd02120240b61e8f641bac8d64&X-Amz-SignedHeaders=host&x-id=GetObject)

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
