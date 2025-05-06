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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXW3B3RC%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzC8X7sFJ28CDkYkXmEfDvnt%2Bi%2FoGY3XyhFltaA%2BTUkQIhAMF2rX1Y%2FnZa37uFaho1aUDqmFFwLM50a6%2BnQJJQFRQ7Kv8DCEwQABoMNjM3NDIzMTgzODA1IgwhOsvHHh96KK9UNqgq3AOt4TOEQ458ORzVjU%2B0ZRLR%2FhUVm5U5w0Bd%2Bi5yEaRehrtXxMg2mF0turDG%2FfcgNsbIeXLpOu8c4eiPWc611SihOQuiWJpBsWx4uux3bfCEpVie2wO2n6w6QRpKnA6IsgkxEELOQmaF%2FG%2Fnhfs9cRcg9wMvDSc%2BepzyZjib%2FmCL9CgpBy5CnJmDRn47ZWgN%2FJknVSCDflL8HHgq1luiYkY96OCQRGGsTAz4KdeZp5uqHNMtJGjxoGaB8kfm6z%2Fur8dR98TPQXSjOVeXeH%2F14lim0lXy%2BGochvyvMtcsFXq6CC%2B6AvRk4D9RmdvEEN4YAeSF6JTMPuXwgMvH6wf1nNCmgg%2BAIhr4n7cljGrkGgZkbLXMixM4ah80ajV%2FJ%2FEYFdCCkVJR%2BUMD%2BoUGZLsJUAGQC3Q%2FgHHLv2Dj%2FgYCNj1LNS2EiKhZfAAyUWRIAZzJdC1CT%2FoeSWX6Dga899l1xg2tWuXQnjRMtLqlGQuq9bJY0eTYj37U9YQt33RzQfIUD4u2ABHjMStt8SuQ%2FTTGqgZFaH%2FcKAv%2BjvrzMcQwp%2BCdpD5YZtZA%2F9%2FWoiSYVLGK7r4v4%2B4L78Csg8NBiqM0YUlQdVY9aRt0ymVxeQJaJzTAKQo2QcujntpeFJO0ojD9s%2BnABjqkAQ2GCq3LIqAcEYgombzRVzMdzV635Cj28c0UltDb9FrZV67JebW6Le9XVc0ummda1%2B%2FXU6e0fPEGU0DcmsHU5tZQK2wuXliSdsYizLnVpPMYvgiKygWClMgFfyOIxLggf%2FYoF%2B4e5OYweaPnzw8wHk8hOT1ZmLgZntrTaXTFbqg2r3%2Fsej31Y5CLCBBG4bJo70MIuzQRjpnQoyH%2FjmHGXi2NrOeW&X-Amz-Signature=071fb40b3a8c3e21bdd0af116e9390aaa62f8cff04083238e94552ecbc9d189f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
