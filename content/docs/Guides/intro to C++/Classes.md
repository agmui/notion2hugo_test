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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WATYLYID%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T160845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQCWxXDFcm0KGCnselcd1ou%2FHLOo5Ql%2FDwdUV3ewO3SubAIgaARBPnXYzTEC5ziPo5L67jvbO52dHJzmAIOInmk3JPIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDMccyKdRuI62ZAgnsircA0RF6v2MqQV39Nl%2F%2F9204BuTX6eT9LbWAAt%2FwBna6a5a%2FFJCm9YTNvi7uWkbhmoG7VZ5gV8EjhNhvIzTUA3VhDYFzT4WpaoehP4Qy1Io%2B175WPIKz%2B%2F0JkevA08WQeC%2B0E35SFxGheuBP6Yi5SKre8TpQwmbH1%2BCsG5xgZCUJA2q61d4YoWDAf8zt8SDmqNmJGYr0gb6yPLLyASlVIM3wYfEa2uxZgVLgchmX2wUg1%2BBrBNRatLnJprNzVgWBo8qNVtoRXpsYNlMkIWrQehiSnHvSMB2pCACesmZga7c4MbCQFWihmMKiukOWEs8zQZus3LxLAqrhP0bDgbasDjNKJE5VjYcNrmjLQemEcxR%2FiMXj9PWreqANd9mm9T2gNrSD0yyHlEC5hwRWWP4Mr00N6Senue4fadiYjCw3BrkPsSkY%2BNryTmHGRrGh%2FZe9osbDvdYRv1WjiQa7iFjqAY7POy%2BlKGqa4Sm%2FzdzxJvSpn9pMv2Kutr6NkfXi%2BjAwDmB6aQovP7Pcs8LGrEDPXyFwBJYpKWQBmgyN8v5aSSsu2pCwIX9IiFgL3X%2FKlsP3aKyr83JmN2wOvISYy0HFqwkwEB7g5r8W71t7kWom3sni8M3w8XWrjR2d1xhKhTrMM%2B5zb0GOqUBTMRjRXwMTsF33r5jXI0%2BIMN1ZnJTI5h7%2B5g9zm9sHAMVoSyufGysLQjoZe94O4RtWdgE8oV4iQ3aWp0lhhkr%2BSqHp1mFvza4jRnFEsTOZ%2B45kwuaUIbPUQKBvQrTkQvd4ewDLcbryLKHCsa9TffOJRpjyCfIXe%2BquSn2i4CoubQ3AuPDNNWVtD%2B8ovuS3bGJvNemyhVMkKmOVeubHeeIRvsAM4LG&X-Amz-Signature=cc2ed446e18ab4286855cedd17d5d55eb31e5ab3f48432da752f357358800b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
