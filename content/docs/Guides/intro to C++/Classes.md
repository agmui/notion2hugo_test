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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWLNNRPC%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJFMEMCIEJQbRGmYAMezFOn78QKucfODrY6%2BfMBD6oy1XfEuLypAh9qTeaUNSq31YtFSa7DPmFt9I4aIiR0QFwOnL%2FDoW6EKv8DCC0QABoMNjM3NDIzMTgzODA1IgwVT%2BC%2FstZvemo1oAEq3AMdrYLuFJuFfSOr3V3BRgyCc5jzljYZPioeCcVRYtL2vwzBc%2BnaK6ORmqg4rJhk4AtLIJ%2BpMJhy2jNRva66e31UATb45Q%2BKronHcsJU4%2B9l%2B5S8KayQOddK1%2FbJbMmff9Z34J%2F6rEjYG54vjjqfkARWP7B9UnFYoYGcv2Nl17kDQjRnTHhsEqPQaS9961yFh%2By8iTyNELZ7mAtbB2fFOQrIow72SA%2BU9u9gvI3YYZ0qD1DSTg38p1KFikCzKbdJMXTjRBemWu0XLELXJgL4ENmq3hR1ayr4LURK6J%2F9YUTCAw8y1YD1r%2FoPfAilm3AR3fcZRrLzSM18yabovaJNec6Xy%2BKolguzGcGQ1%2BL7wkc6QJ%2BDDnv78fpUBzllNnKUj9F2k0lXd1upfwLsMwNfa8yLB%2BjWQ%2BsVZ4DgrfBVum%2Fi%2FQcSra6J6%2BK%2Bao0ErUYl%2FhkNid2g%2Bqg7vtL49tYnqwl1xntRn9JUEpcmnNn9mDM0%2FyYXN6ltZKuWyBBHGKebI4Cv%2BZ%2FTiRSDK7P0KNcYY3Jxq831oNBgDKtbe8ueumxbYr%2B%2Flw1LrrZvsFgigBV7driBcOAn%2FFsfLQ9JdvbBSTQ0ybQUKirpWsB4sbrlOlCvkmVGkQDjZz6eUdqNozDSoJfBBjqnAQEXEUCSlizbkgwXUV38JcCCLhNzjt9j0QVF%2BqzdgY%2BVcD3FYjhNCfKy95cUqKv70BAVAmXsymq5PnZag%2BE7ju14RkRp2lVCmsCIASim4OJynAfWR%2FFIWZr4ukS46MP5x01qKLh3SWcH6eU2vMM5mehzON0TKGbr4fLTSSoX43JImMgYkbWGes3K9DyYbkeguLIOLfSoQrvxTsdyWuTtS%2B51QKnUc8Ax&X-Amz-Signature=eb6162821b8e04bb981d994905ceed4481162486d5488d230590b5d43745d3b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
