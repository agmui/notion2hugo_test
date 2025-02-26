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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEV4GPOM%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIDLsXI7WTtK9YGCYHwIrdrspGZOOtKJXseq9YaM1lHXsAiBTEqWulv4bqRcg41qGYuJb2LYrlCLcDhw7%2BAsHCPHTYSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMKxD8c9BhX5KHXiBDKtwDle%2BXg2Rk2YArF8HiAWg%2BELPJ7V%2BCvJrkAMbzTJkalSvDQe8bt4GFoCRtSwKIuKQbt6hHg1T2o0GPFyci8Hxsqw%2FVdx1Z69XBmOyN8Lom5eiIxm7n1brxNjaf0HW1qBeIWVdR9avBNWsTbD2XAxVTePVQtUm%2FrbNxPrMft9LujG%2B19AG7%2BNAR2hlVrmmePRt4%2B1VoQMNW9cZuvX0SbfhWPWyH%2BgkgzXOMea6h0K%2FVDQTYY5X81iCWhW9c4ZVHUZmeurNwrR2VC3tteLC%2BXq%2FCGamzoevam0%2F%2FpxqB3sKslwkan6Rb3kac8ZNn4zyUOfUyWo9R99%2BPMBr7p%2BrfHayhkHoQHFhXPnwyWZy5FGuSF7JEIDKfabWcKBifZvlRKeF0G3hS5dupTDrtOZOAwLuzAhCNiOYh2yN5YMFM1nas6eofDwsWViNlySrNfz7Z5%2F%2FHPCy0EQ6FzXMzjsod6cpOBi5VauoTRxmj7kXcte2xiMKpX5RnIGB78dQKI1NLkwzXQq%2BwtcJmxV9jj5qzOHIqxKpBqfhX5eGqR08ZdUeba%2F3MR4uDD%2Fwr29%2F0BPXZjeugfwXPWo%2BZy4OCT0uCDwuhjOo8s5S3G4j%2FuGeYaILpUev0swoKFv55Zc30zZMwp8L6vQY6pgEGq%2FbjqrvVWc2mCLAgQYUgoug5Dgf%2Bf3k7fmdQAMpkavcLdkMJDrv%2FPrQ1ZGEHl2L%2FWuS3qOMLqpOZnMppOKiwC9WUPCtH7dDhKoB1DMK%2Fec1uYTvQgFTtHOWbg6Lb7UNkCA3g%2BtPxftzMJjcCOTo37T%2FBoudzkXhxH0sHYdTZM%2B%2Fq6UO5a8zxIG9XynJp93w%2B%2BkrZcnzlC7ZOKBZiIcW4FlpUvjhW&X-Amz-Signature=d16e95cbc96a8978e1fc0e0747bd52d185a9daa3cc248d60c8d2a39b55b45a70&X-Amz-SignedHeaders=host&x-id=GetObject)

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
