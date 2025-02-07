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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGV6ZO2P%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGOWyqgBPZ37WeoeN9itlp%2BCQPixEhkF%2BZzp2N%2BomSUzAiEAvgWdfAOb%2FgEz684kJR6Pa8hjk0QQds%2BDcxu6ABqYSwcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDPvj3pvTxV%2BpDQl5gyrcAznABwR4A8LUUFsD4Z1omwcMlGrf2DBsrS8zmp%2BAbngmSNZuHxK%2Bnk5lWLuGXYBLpFah2mtyfSzvI%2FnXafSoZfQ18BvV0bIoAQ9ns2TdbXcshtVUACSiA%2FtjACJajSIc4zBDfKVoHt6pqhlOGZvH9aMxjoxT0q8Fsrg03tYCjeMaSRuFh3%2FtRRkykaYUeY%2BD2rP2zOqc%2FbSXXMqCqZeQwuVZJYlk59HfhCpXZWkmmd9FjSrC3E107VFdlPN%2FD%2FO1PNs9QuymVqfjtySOLskClJLSeDFdkRx1SsbAGjGSro1FKPa13G%2F0QAQIxIc7kntzy7iiJLx4bfsO72FthY%2Flj3LXVFYVbWnwxomcbiqB3ZS%2Fw21uLE5QwGzO%2FLbK7du141NpjYFdRzmRBrcEHVfsoDEyKdHZrPJt9q%2BERcQsxscI9lJeBuMB4KKp8kWpAJGWfnT2AbmYh%2Foqjsl648SDu0lmiFnKTU5PkUTWPtSRWs6vcq57SXsWzX8Zh3BcIekdtQ05gxytUuIb3HJGv6egzbv%2BtgJBOFRi%2FZaT91UKUe9sKJzCAQdhxqF7HcwTZHbxPETqPGC1niRVZ8XDQqGzdmCPe6Z5RpWKXl9zkC5l6Vb1BjNPMKo1V1Ukm1g5MMX7lr0GOqUBlCvJ%2FhRi%2FcGdFxAEzTofpDR7IAupBMS6adpNVJm6FvFa51y9Hh7ZY5325iN0abNq3dTX8psShCh9m56alusy5040vY8HYLiIt30WVC3hmmHqtbSekRjKOCp95xLWPpUXaglCaJwwBydb%2F3mlIIWwILzeEvzFMMP05c242RRAo6d3l0F1QNtq5NjKLx2ig3eMDq2%2BFPMghynnbi2oDgPdCfWyiMfI&X-Amz-Signature=2247a3c7120d0c0fc1092a23c5d46e1eed1eed0741b644e5a5f2f99f90fff832&X-Amz-SignedHeaders=host&x-id=GetObject)

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
