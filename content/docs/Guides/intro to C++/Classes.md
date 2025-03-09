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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7US6MVD%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAY5dhzSZk0SBMh6u6%2FOpQuEfSSBA2z1XBvV7I3Tu6MhAiEArdAoSg8elxMmIYQjpVekcBnytd1A%2B1%2BezhicI2iX9P4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJAXYwhtpcfE31ZSwircA9d%2BH6NDM3JtSAFpRJ%2FQBMELASUAhsmK3bjIzs2r4XoEcZ%2FBPUquOvyRMoKU5xQrH4d4o2F8dOaCEkyR1SgXckJts3sxvtFJiZipjI1I40xtXPRQN11bvnTXbetUnlMwydKnRnYnVv3cluyjMuDGLbeEHALn2ImFcIKWqWHbkSmaZDd31aYNZVP%2FMrYVJURPC6PS7%2Fsa8Uqs6ngol%2F%2Bnd2g2RVAVlFOChEC%2FGs1jqbW3RXdBT1eKjHMIv4OxumU2WEx7O%2FzitSMJvcHp7dMWrEBD0KDf8nAdrIOOaRJN2jDI3809dMUi9JfJlQqNB6jILhWNRjqEg%2BPHRmfR%2BmiuKB9lh5rr8T1C25ZKL9Oo2NEJL7fFcc58Un5F6jmhnbV5QaOvnyZf7nbJAoXlllYH%2FvO8olPij9qsMkk9T%2B6ParNSFArF0MyJX%2BRZgPodEiEpqg9O7NoL%2FQ5oqdncVei3HG%2BTcGd7y%2BIKTln7dIJZ6MMRyo%2FMIEyCnxkIaRRRqMGkBg4%2FhudPApQ0ze6fUR7XpkTkKChSmM39C3DKZbwQHHrmZDftMklwvdrIKaq5o5JGJ7skYRecxiUgqDvB4LcE5MXKyqpVnBcIr%2BtN5%2FbUD36UjOYh%2B4tUNZDI%2BfzxMIzwtr4GOqUBro7mzt0hJ0jklPficpfhlBM1sETUbuTNwgZsQN73BhZU6lSjN%2BwqAtL8jARhrB9CTjeA%2Bi%2Bpe43xG8XfM2nwxf2pHYgIn%2FUmIENIBfTfx7Ub2JE%2BcZg42RIK%2BRHGGjpVh7cUx1jwSugeI0Y24OYTDxcC15JpbEunnK8KVpP2U0NxDYfnyPAHHmyBdcecPVeYtg%2F%2FW4G5PiscMrXhS%2F7KkwypOiLp&X-Amz-Signature=1eea8b9f555f70daba1ce9624afd1682c04217018369dac9eaea2914713a1850&X-Amz-SignedHeaders=host&x-id=GetObject)

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
