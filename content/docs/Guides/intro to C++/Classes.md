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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFGABHX%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE3VtgrfvhhXSxLBuWVbgimfFAP48j3MLrYxdy1c8%2Bz0AiEAgVxnWBYJ2QmJPwDMLvcD0ZgrmVByWWxVlfdlkPMBBDUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDEHnojpnKSMlhQ1h9SrcA4L4tmKCdgg0ASrt34GyRWo9tMPHU%2BpTIJLpByk5wR8MARILvLaN6WLx0MkiL4DmiLA5hxp7DSFNkcdGlwAvrjp53%2F56rts9jFqakTttt2jANlTMZ5bPnUrSpYTW9N4%2Bn8rjAoYFnQaJp9uy3GY3JKPgnO%2FRNOxSfSN1gr2DXfQFxxsQTDylY0ar8Y0luCikrwo5EonGlSDsZUcj5cXFgo9rm2MWYu%2BIcFKSQHO%2FIdQIbd888BWOgfqfMvklix%2FZ%2BSz79XzbAtQUVahyCqkwhV4%2BpOdGjdBJgNCpdiHtoAB8CGB11dtaVJo9cG50JTY59rkf4f5lfXGMIZaNdC1JixSVltfhGA6qb%2FHxd%2BBb6sCCZ08UTlSbPtqwUuXfC%2FZX18nf9e5BCWsbqSO5eEzlIJ%2B8mpRoOsNGhkqbV5NYLX6pv%2FO1C%2F7u5D5MrEArXTP4jnJuSWxNNTz9kgRucK6fUWC9pfX%2FJ%2FVXOvs996CVJNpWrkEf2wVsJhoYNe%2FvPKpRep2nLGjU3hobSW%2BVvs2%2FiqWfH4E8i5bh%2FcADJNCjVhdlsn6h6kwRWC6TWHToIcbfe%2FvJA%2FfZOPUR5f64YL9q4Q9ZC73RYOF%2BZuzrrfg6XZ2LtJeMUUb2lzwNOEUsMLv5388GOqUBeyCOgutC7gM1NVaSuDU0z2igQvDnM%2Fdc04CRNSRLUF%2FGqjwrfp%2FDhgeae3aB%2Fsr59If9A0Bd03JO6pcnpCwpEUv4aUiPe%2BfWtFt3%2B23gHyiTOKRNSK2d6U4nWi0iSPl4JkMA7aYdlrcoz2MO0%2B5zu%2FB3OSKqJGeFs3lj9RLJ1n8OEUTBHi%2B%2FoUe9l85hq26IOw12aJ5oOZfMFXHqtEklwJvBmL4a&X-Amz-Signature=cef598642d717645954fb6bda3da762e2bcbf6f94e4665c48f48654ac58f0b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
