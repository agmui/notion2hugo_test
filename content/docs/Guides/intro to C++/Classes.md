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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCESPIGI%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T081240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIA5tCrjjODcgR0vatYKF4NiyITuGUjj92rkxDIbk7xK1AiAKshiuXGQfaDqja9hIBrEqJ7a%2FvTFit6JUtQ19LnRL2yr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIM%2F%2Byee86H9B30%2BpaeKtwDvCw4br4szwKnyTFse7BW5uQ%2BTjJxZ%2F5s9tx9it%2FLA%2ByqMum2pqOZcMM8makJBURt%2By20SY3p9mJb22qB9l0356asFVRkeuWNDLVXhSVhREcpL7LhdG43kzV7l6LkTPkw0o3g%2FIYIgSkgDB5cMoyRHWDAGxeHCJL66WjlWODRn26coTClbextR9aZnh5qNRgSf7nyBNNNgTXjOobDHB4WQtwUqGzg%2F%2FaLsUgeAp3kFF7lDhMz%2Fro13okPb036B6j3roVf4I2DWX927o%2FmejV7KP4qANBMvcRx32j6Kf4lYAnodCDkQLTTKaVgjdmYiURpohTCj1c5SKTND%2BtQFiP1z%2FFzrrG1brqAOX%2F1T1p89wIDOIVQm%2Bi6eFY%2BQH%2FKLXqIoGnJXHjzlBlLnC1reofR%2FueMHmpJdBflR5aQg1B6DVBSRI7kMqsfQpJZqsfqRW5bcV%2BT4qa1qz2ypHUTaCYq7orlo0d9XxGDyc%2FQ0m9KJT3IKTEjohkjVD1voxd2OjKsYpJTXI%2FkGsJc%2Fe1zu2Pv1c7DLGJmagvdjFwleKzcE5e8i3ORyaFBKudtJu3bpY9MIGlZ337wBjQA0dR%2FZs%2Fk49Kmt6vNtkarDzy5qh0vDFNbwmaxk8FqpO5JWL4wmI6ewwY6pgHjCITtwVtbAuYhvZeifWhZMrCJwlFHwurySNWYwOv3IRbLRD72MGP0%2FU1AbZittkWV7K3brVQ0MjkF1%2F5ACWlNkQSyCOU0WrdzVb3Vv9oQgl%2FwQxAEb06p4p4UBKcuZkTS4%2F665%2BLYQSFzYVJc4KBJ7FsKiF%2BAXnj%2BTg0vfU9jIKbt2xL38lyZuHbMVXr%2B1dMEl2xUeTtV3ZjNTuOwe04pdDtyuT19&X-Amz-Signature=99dc91bd66d0140da5d84e5df2a1fd1d7edd8cffbccb78d6f7117ff5e558a084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
