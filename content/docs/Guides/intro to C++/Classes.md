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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ5XBRGQ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T100945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQD5YzjdxHlplUpHFE9TKTyX01Ox8jw%2F2VYDIV4Bq4uYngIgI3G7wCkqmxAsvJyz9bxyUuE57cLmKEmowwi7rJ2Qiy0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEd5pVh5pbETaDUgaSrcA2aZ%2BdNtWF8RxuQ5ccY4KAh0%2BURNfo01EsbhHsm3ryxbwcbIjzwQjy%2F8K%2Fz5QgVCCQEw3u%2FaQzFQPfXRKzy5QEvqa1pcbxVREmKm6zoqCCFwz1gNiPygxbpGaCXv7d7UrSRmA%2BIxIAKB%2F6uhQWM%2B%2BR%2BGDZDRS5mA%2FAt2WHYzrxL8T%2FlVc9w%2FCMleu5datAeTtKKdcXFS5uE8d7ihtxAZ6rC1coJIViDmpmRfLW1QYMxdLib86WJEmRPGV3c5cyE3AXGwaDJAO0vFZP13uWFZLFtMGfSijdWewxiAMWPPyEsDnOZ4E6cayq9K5vqIz%2FnbLLxUQ4crZtKYIVSy%2BT5kkpv4Z84S6GtxYamzoGNYTfkg2INzli%2FPv73KDkVjNurZd8YIAlWgJ6NEc1WgihXoJe8MF6T4U7vrA8u%2FD%2FfVxu9bjnmbepLaxgNZco11houiBGhx8OVDUC86Zj%2F%2Fc4e8afXq9u4iOEPMJzRboL1C6S4tNlaZJxpofp8Bgr%2BIRj2NEg0u%2BpCltniTM33NRcHlv0rKlJLIJnFYPnELC%2BTxuw%2FRwlYL1c6e8AB2RRzPiu5JYjnByV6DZwoAyrQul4cUNEFtSaz499rCa%2BUz4CJnDs4BspUJrKg8I%2B%2BHKhLGMN%2BjjMEGOqUBQ4G%2BesRU4g5JFUFciE5GQ9zdRdojGof2TUYYJZNBihNQdLB%2BMYGX0O8Wu4jcth09u7ZsM9BWFBcpAgRlNOVFPi7XdGqmJDOuSLj9Vg%2F432S4ndOdyaAwUeyqNPPy2NwFw%2B4ewNK58aZwKq9fe8SLdRPvWjgbcJV8UTbyZJ3crEESB2631CjeOXU1ESiboL3HjENhnvjja59f4Hug0lYAGKVv701e&X-Amz-Signature=25f3209f7eb8465b5911983e3966adc52ac434c74eaaa03d78b35d0175ef1768&X-Amz-SignedHeaders=host&x-id=GetObject)

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
