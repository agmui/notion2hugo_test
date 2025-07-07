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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H7XEU76%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCiQ5JEA5Iz1mtCQKiUdlhC%2BJBzVHlAFtBAWb3KCM9QVAIgWvMuylPIG8zYmD3RXR9ZDT5r2xXl0EXja3kSkM8wqGwq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDG4u1fhhJQAAc2SwVircA%2Fu0ogOgjIagMd0CJcJ1c1sbWpukFPw5gUhv2h%2Faa7QI4F0izkEQE4FXWkMTf0sKd%2BRyQguV0gV8cFa1antxI11n9jAUWARPcePpii2r4WalpDq6NGipIHXIZhr16LXTL4V9ZasRwmGtphBbydvJiiUrretd1%2Bfa4yadr7wLQi3ZLyk%2BIeuh3i7rY4%2FY1QZBGDAmhSM%2BCKlYKuUsZIW%2BsafgNu%2BoIEq7vqERSyZdO8LeuOD%2BwJ94USyUS0YhdYAZ6ZS%2BFIznQz37BdxfF24VciPAvz3U1%2FmBdKHdlFCgUt9z5RWqklT%2Bx3HBhJjqEr3C4QsiKxt0Bu3kjqKQ%2FGtL2bf0vmIPaiJHKuc5lCxQm89oUVuDsxS1RgxpOfYzO24GMHLwyqSj%2FE1KYx%2BMVUT3Q0z37NDth5kQkog%2B5W5RSQFpLrPAGVO6Z23srEq9iFRN7o7jFR4EaQLuM5EastT3aLPFPkBYqPNBSyNYgaQg0u97TEaBhCHDP5cVyQk31vojJ4diEXERI%2F0hH%2FEAPIeKBGElKpdLveP9DQq5mpjUQPKfmdYc4Tiqb8bljo3AkCWfoJQwHwwQVJkcEI5LWcycqhWFpo225l7uuwHI7eiCDBxLdP0VhUg%2FgqG00sd8MPSzrMMGOqUBovDk6tAP%2FkmrmKMIYTuc0wmRp54JxBK9NTL2OwbOjWaW73KXiaA6gzxzC9ecE5aL4GkXoiQ8%2BtPBXCQ39Fs7D7WsRtvcKkA2YAHyMVA1o5pNgQFTFyXQi5H2fC%2BznH8unJLi1U6XaaKpxrDLBvjxFnv8X6U06b1A4aqVNYBy%2FUxmXo7aNYA6yFSrjPsFXioqyP3sqLbJ%2B%2BD1P5uWTn0cJ6BWFAFM&X-Amz-Signature=247f9b0a18391fc4b5f5b60d1782bfada09314c48c3829fd58f1451a1a4556c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
