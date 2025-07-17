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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFJMFJN%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T181307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDf5kEewT8ValFBuF8oHSZKFMwI0fIzOur93SQDvClBGAIgUKnTQCYVeJsPN%2FEqHcnpwZch3ZxDrmmoTHFmQom%2BG1wq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDHoZF7RAoE73yFmPKyrcAwyzp%2Br6F7IVsJwRTv35yTUfRTJ%2FadR3uIy2rCB8N8v6W1lgC7IMLpv%2BmAKn78rGARSmNrz1OvionZPQhCDYt4i0Mf5aNMGbIWDDOVxEqANJRJsP8DmXHrBopuMzNTRCJO19tlcpJTi9165kLNbjg7IOaUj86Hcer%2FcQV9oOjQkftSCqpORVGPomeq5BQ7kxMD7otyJZSxM6w7RFSfdNfGsYnYzU9z%2BvWY%2Bb76HPAb%2FPSbY2XdNoRLLYQU4hS11eoXdeiiO36CLd8zre2A%2BmDuMpeYWCdtUHwXZVX5GmsneiIFX37n8chgiqP3p2DvqC6hXLOW5%2BWYQP9KdtR4s0Zltk7P2fFsvsrmFyuMnAvShMymmeXsMiLp7RbdEoo9GFWs1pmcYN%2Bi9QUb07sZ9e6JBUjhruyBQoN%2Fobb5l%2FRFAjnMuUdBduH31FjVOG5hgpMQxSdWLmLdUf9EGa6MPnlK9lE%2BlSWCVWFWo9zfn8LvbJlMn24YA3giGwQvxkjx4fUJNNJwbjAkHpVBHjWC%2FrOMLGdEsH0oFjQCcIdQm%2FV8WkAmm521HOMVrzL0s78aLA6kHCwick0jOlt3KQTGslG87AE0p0VjElIK4uhYB350QK5g4MgqIVhlWCFQEZMPzm5MMGOqUBF4Lf%2FB1TEyz7J%2F%2B0twKsoabZWbyFt%2FlmFanA6uxVHAJphFSy6U%2Fh7mJxt7YsjMcdP46DYMAZYNQaXEPmuKXwJRdNjnrJqk%2BJpxAw5FZiG%2F9RmPMSUehAk8YwhDwv4m738E2J7%2FET%2Fx1x3JsTtZWcp%2Bo%2BXTRt8DNtic5%2FTPS4mN7bg9Z44wW%2BOeiKFZN2PRXYzXj8%2BGNK7WyecUNafqmlcrvhnQsC&X-Amz-Signature=f7340a7493013c102a2991b93622953b2f4e1780fb477f60cbb163320034bbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
