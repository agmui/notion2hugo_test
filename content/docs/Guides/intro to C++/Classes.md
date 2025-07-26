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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPGJ7EEY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIAdLGPQLI4JLYofAwr9mQoXgIcD78x5oUgwKcnMIRziXAiEAtQzh5RYNqTuf6fmDyAUC46c3u8TsH56Ed%2BUr%2F7JACgsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDKAAADdvTB7uSMSf9ircAxmk2VId5rJ0TTIVuyLDQTzUgvQkhFBrVVFhYMBuuWgSshfUodrFDwDgeoA7zPy7xfSVt3ubtnM0316J7yI4BEg3bFU2K2bN0eeFvJtHWLENMBgjMbxcE%2FYFv2CMaRpLAVP3zEmlNDn9pCo8agPpaaEShAmPnlUtc94wBx5A2GtbNJVMDHsVkwTR2oAIiXahtpB3w1why41rnUFuqp%2FObGfsGPFKwxxFci2BYQMXFfUHrm4ozRWbNk%2FjDmJ7X3WUSq6ydafazIkrl3gecAAwic8ICsv0hXOirWqJ7p9PiFAt7xEIIgaZanLyVK1rBF9eFH3lNkISizZX3d%2BlqYZteRnkhQelLQ6S%2FeOzcSWcuY1bPmHOaxu6YkWgtQJGCWMuP6ZNvLaudGK%2FSNN9xyD4XXATVptYmUyeNRJt1EVaIIiCa9T1tYPcBqiHbvr%2FTqHO0amLXDnKZAK0aAkkwShAqRYeytIl0wvILbEmZVKrab2P8c7lnTNHXLhhvKM2yNd9yW6kTRiP%2FDVmvGuFQmzsYse7znPeIE1GpzPafxxkUrgeMuU9lcrknDNPSpO5%2ByXvdanukvZnknBCoJneDeMvsN01R%2BJhhSjK2Z8AcLy0TuYgXlL9MIEh9x3im%2FXNMJWAlcQGOqUB3dobYMC7YtHcsxkm9n2C3M5fE4WDk9x7eZxULjPbMN9B917ey93yo%2F8LK0y8rAjn%2FaIm5q17Cd7BaGg681yI7PbyVrmPbikxzdCCFHrUh9mJDYXRndpwdeGZ0sRjb0fVgyd4YFgfH94o8ecZt8UIAGXlxMuQu1ihA8olLNbMtsXCFh4D27CSyZgJM4NginzOR1adDlpFoqbXmhwgi01h2qEiA95r&X-Amz-Signature=9e189dc7a3b7ca09908fd285f725f44f03e57499c7acae00b82ea67084de9924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
