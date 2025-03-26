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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622GE4R5L%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOmmgRL6YJWzGQMT966EpjwoTV6QCm%2BDFUNq5IURKiCAiEApH%2FuD7Zmwibufp0ps0DMX1eTux8ArnCn4kHpYzQti%2Fkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDIU1gAafb7OYDlyOESrcA%2B8%2BTqqHcoJhe%2FxhxWOEPHS3RwnBWVmC1NO6zGM4FfFBMaQvfjd3hbRMHLBlMWmXi9vCfGm16aOQt2fhVrrfnqlWZKF1%2FXeA3voLKG%2By0lQfKBBY4Tpxzpyis7xcRV2BP%2FFOlaHLnJFLiktn2SUwX0iWFff5I0ubsDxSXLDNMnjOlHVOGH6z0BZIgtvEtl0w5cvcIvfvYBbAmepn%2F9P12F5%2FrOoeojgA1RWGmGnf5RnBS7Ivo8T7uwg9Ylt6Vym7jCsgAmUNWqKKiXOT%2FcrhZ3Veb0qv8HDegGV1HI2h7rRJttoMxcHNcYhuneslguC1I4XGZsfCqEG7%2FRMj443wp%2B6v4s6IdGoNsBgu0s6%2Fawm446%2FZYeetmyC3aQM6427eU9WhqPrikCj5WxzXFBWjsg5dHEKVT3Mh6pNrnwrbOKQuV8FT87GnreppdPLeKSu05CMGq6GHFgLF8n%2BvN8Q1lFvQW8qtlaag2WCANTtDTg%2FuTnu4ql2hbBBvQ83o9Yn2%2BUAWLwwVl7Q34Pc9utbLn0Ss%2BlIvkfRJHm70O%2FyOXnTUJn3VU7rx6atJNR2g8rVTSmwNLJl2AtHTFTKzWReloncfSX8hQ2nbs%2FGBU0BDyMwwZq%2FPaYycSvpjy8GiMN6mj78GOqUBeRWKKutfvTZ99OTb4Ixwo8rnUnbwDKRMDuUgb0eE9cbQ3IbHKtSBFSxSYWVncdAW0%2FBqVeKOjjeZax6V%2FSA6p2OSOREn6bujcRLjUEqeON7KjzJXUU1o37Z5veUe5lCL50MJfD9YZgBFsFCeSWHJSHop%2FibdLbOx90wvrSoJ7Kng%2BZlhcumAZ%2FSgEfgEcmk3uEWEj1pNY3BThRxlRN2Pdg6j2R0D&X-Amz-Signature=337ccfb12a413cd0efaac6983d0f14f44a7b8f9f67fb9d52dec2830db48625a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
