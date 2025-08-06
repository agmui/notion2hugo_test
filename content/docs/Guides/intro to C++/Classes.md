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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVJ3VB5X%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIFPrqgxu%2FmkESYZag%2FWx0quMtVSqhjJzpVszCoR3g3cnAiEAyD4XXbj2fD9uj%2FbuZ0Gg2rLj9n9XWydXY%2BU1aSjsBWcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDFc5NkW46NIH1GeUdCrcA2uU3X8tL3slTxjrMzOJO6WPSU8RTfYsaXNK7Fv%2Fc%2FzKlukStgKfID3%2F0F9sR5oH51Og1OtVYCmTPuDg47zr%2BCYfvXtTukpAM39oEs1ToF9wxgmO5ZqlLnsJQZd8QR6YYAQTq%2BLf8q7lwt8haKe0B5AI3z0bJG6oDese2mQTrE7IOySGOlyv3DPbiDkJyc1lEN3pQstz0Is%2BhsDs9PqcuZxahWmUfOYUhOtTUG7xgu1n12ddqb0YAFVbuJJO%2FoO7YuhW3X6oxAt7xmnEJ6xL4G1kIHQQVz4gWssG0HTxNfRFeceQCtW1yAS3NkPpGo1tOUfpLg4BXXDlDAulIDX6Y9C0EXAFlH8vt2k6PRuFctX2WUCxSVqehkhbGoHNhF%2FcNxuXKZigDxrYfVXk%2FTQTxL6opDodmC9w5epcvMRWtuZXxNrAl9QRaaQrih8sOlXyjjHVNk%2BdlBe9EcdV5KDMbDQxd%2F%2F%2Fm43qn%2BQ2p6irhiNKV9JscZPPSJE2Las0OhqFW7F8O8%2F5mKL3sinvQNiNkVacdQm%2B0rJCdVyLB%2BfW%2F4j1tU7rmJL6AHZVEnYL%2BQe7zPMnvbovlmIjegfIVlDDNBw3NGynydChzhy7zJDeFkZrrHQ2DNS78SBP12jEMNj8zcQGOqUBmLAjqCcoSlEJuQLh194H3lAK43uOa4nX6fJdRDdAnO4uLnfWDbC2zmSnOwuiGzi7sdzWFQkBb4M9Sq0AnO4%2FabmRu6c8TILBuw34O7NnrHSZA%2F4dXG8CTXYHYBV2pzhv5pJ%2Fy3xNjhxPIR4hyXjDv55zL%2FCk00L%2F%2FC8Oorlu1wlmDWWcJ46gVSZ2Y5%2BAmZw6q6FQxABc%2B5uupAy34i3rVGvtj25p&X-Amz-Signature=876a87bd897b9724639277347b550721b5c5067aeb00c8af6aa897827731c5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
