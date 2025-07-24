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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DE4L45%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIGtRH8JIZWZ6ix4Ld4w%2BYmHGRCuYo4tn0zfQj7xvKSVJAiEAqwUFV8Njd18DjB6mziv%2Be5ehTW%2F6lLrSHnFl3BleeGwq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDAVT8LZSD3CxXuf4uircAyDA1zzbHXkn%2FHYkOl8nBFKF8qQWlW88r%2F7hwJcJ5hqXcRTAkJN1MMCcDTAlg1sN9kCcBV5VSiGdYwspxWqWkHDTX9lnRVra%2FG8yTlfIhXNEZKGI1G36LdYW%2Baw%2FmO3bTuDUD8q8qIQvArxDAHjLdHX%2B6X91VJNQfJ66XXJKdonM%2Bq8ObbytZwSRxZMrCcEeU7NxxFGJvHW9DeNxHOXyH7xMCJzFO3x9P6V87jCZC2rYVYhbV3w16MmF6FekpNe1YtCo40l6phCfV79i8ErtoBQs4e3VMLgcMClkLNWAJngsJcgUZYCKDTrF9I9VBNTAQLGUNiEtVLILyzUaWraR%2B2457Uh4FDioyLJwiUyXXotm3HdtJhxLBUdtI1%2FNVS3mROCoJ8f1KqmyvFr8kc%2Fmdrt0E4CkGE69VYrelyahGFxvKNyntzwf9DIJnux2rY4onnQ8%2FfhoKk8h3s2LSPdpYiZiBky%2FaiUGYOAenzyIOlpPfyhylPYvdaK8gbkh21b6uSuS12CRgUepWgXDBaHx3R%2BpO2lXUYy3FPJyUnzJnpKX3LwwCNWKVaHjLQPYDiHCO1bInx7oAlYuQzhwnc%2BVMXy37qd03z%2BBsLW53iTMxDxyOrbgEolxdT0rEM%2FiMMuPiMQGOqUBZt8moFToeK1s%2FOtfeYAtA2D228zJcmjVQkxJj0ArPw%2BsWsjNlTY15pV0zwYPQErdoYiBAmPDsDiBkkr3EsHOb7nDh5xFjQRhRyyWPtfupSSim4%2FLXeXqxqWG8uDPmCtiHuxTh8r4QqIGTrEm54793Tpxm4DEIqTg2chk6AIN6gUfQDN0GkVHHC0Xi9UyfxPQQ07KUqfPrSEGKYRfFITAx4CBo7Pg&X-Amz-Signature=dff01baf301d65cad0498c39b08cba21a815a7b6f8209142d57624ae72ffb687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
