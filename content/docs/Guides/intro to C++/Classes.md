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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XFMXQUD%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T091145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgnanilDGAilNhO7RLaLGqnTUzdS8Nu2B5%2BzxoGASj6AiEAo6bSHsVr2V0hVD5HdXLr9bGltILf%2FD2oxyYzKk%2F5mEEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIRJzb8gsOeTKlqX5ircA73U32rQxUzJCLwiYhUqpJMgO2w0pFV42jjscsvxgpad8hiHcC%2FLBbfyeFmh26HkinfEeHL%2FuCPgIX5CQ4geBWd4U6wuoI%2BNilq%2BkZq4jFdzYoftzvB7l9BwcuAAoA0AvIQLEGwKUPx2YkoYFBgS5IHRz7qUolhFbONaq6faCgmV4tNWLpNWHMDM2e2P0nuL2hvflPJHiWhhABoCjULUQV22wI3zzJJpGmlz3CmbuzTJpqGz84i0NR1DZAWq6qdADpgmvdAPk2YnJmAPITGSx%2F%2BBIdrCprATWj8DTAoi6Fv3TOzDx3WnQs%2BfOI1nn2Prgn8m%2FwoeiA9%2BQPcUx2WL8akAB7icx0q%2FEQHuYaDQyKNTkjAG%2FkLbhvUieAJ3dHVowoJ1xV3AzLhUEZDVnt6Dc8pibCxG3RwEmpM0%2F59iHc64QXyemlELrIM8A%2BTHMDryGeqilZQR7HLTCfUnkayBIaGR%2FBBsGo%2BlTspK4y8TuN15%2Bf7uM%2B925tu%2FAPPl4yr7soXb%2BVI2lqfuo%2F4GgcWXa1Hn%2BPDB19MRFf7aul713wBQKrj3SP9KuRG2j9YrBx5YpSJs1nWX06i7Q9E%2BPM30JSBuaqiBA5aUenlXJjehLdBjC2Fh9Q58TV0Hq2sWMO2Us8MGOqUB6F1Hciz%2BndU17rPlztmqxC5DYulRSgOe8A9KzkaPuPndVmHgNmdac8BsLi8Ou3j8Of84O6%2FRopO7EPnGqkX%2BZhe5mNwq54RSZSksCG8jbOsB13XJEtBDpNxOR4tMMu2tqupAQr%2FpiAPuxD%2BHIDWFNPY3fp%2F2F78K01F3lUWdH4viHQpK0uf0OcV7s%2FLJ7g03bXbACH6nal2OjW4TotmABuAx87JC&X-Amz-Signature=39aaa2551206221169a2c8ae9340e46fe338745690a74d2e61daea5789a3efe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
