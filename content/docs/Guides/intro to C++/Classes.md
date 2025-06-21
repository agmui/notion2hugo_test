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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V25CM3M2%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T100822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIxLGG%2BkJ3BY4Qmq5bsgXihIo5bIQDTA6rZmPXkqQjkgIgUdqAXWp9PfxLB3jy2ZLOjvpe%2FBlw3R7%2F57Iau4%2Fk2yEqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBZuTm4jeoOm24wh%2FircAykVEG8uoR0ik6LmH6%2BhY%2BrN5nPo2WF3VqznQjW%2BWNP9wDTKiMJfrp4WXVwA0WBcwQTh%2F8agq27XsuH%2FFzlHb2miMoo0JizEpEdNv6xWB2lyOzBOVHxJnVw8S70mDKBE6ggHGdR4UGc%2BZpclukrXb2UpIIANNjDlQ8KJ4ixUgHcgmSFEVFLwSCaS%2FyXIVHvQQd7s7rq5NbqUG78KUCLG3qeyO5q5pXoStH6Dt8almbqLoMorRTp5Paaf9IJfFxaLANrYk5GCaP8rwFuzoGJMosBRNbHfA%2Bi9kDn%2FMbhYe%2BO65Qhg3YkDpymT%2BwfGs6L%2F%2BHMGQQpMkxQNqVr16vdBI%2FYaU%2Fy5xou23qZS9eOqo1a4JE2BYulOC0nxdTRt2B5MJryYjEsd%2FYjO35Ta9Z1tnyVDOpEW5ddNvaB0rtodnonQCfYeFLq5xmk9XQyvILVb47BJqmAXgNXgGPPIRS29IqiplF%2FDXp140PRgh6sQCuaDrLrI4tMhuMJ%2FDmRnAA9XDQf8qmA0Bui05w1Oy1d559qJldRj3EvZ8r7CP0PXPENtPjwQp9Ga1Qc%2FHyD4H3ou8yIOdW8em1iI4NTLlgeaOlCQY9rDEJrxauVFmA%2BQ8Z0bR4mO%2BogEb5o7a%2BrwMMD52cIGOqUBLWMk3Xk9YoSf2XfRtux90sEA%2FdaSR1v%2FyQHMQMouJNtGKpxesjurMggjGqAN53HkNx065KTrt6F0wXYsfVpen5LW9QDrhOnj3PyuKW0mk3ReP7lisDcCz40fY9zeriZBI9yV%2FRC2rMQHTPWr7vp7ABU85OrhZImRe0nouwQd1p51H9OWTa%2FjKFHz5sZaaZRo1%2FERJhword1OFIK6CevjSsVROKYf&X-Amz-Signature=84965eba65b3b635ed1852fb43e74ab9e1b464822393cb2884a3c774bde03dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
