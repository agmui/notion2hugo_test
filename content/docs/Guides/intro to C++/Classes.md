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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGDPOOGM%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMsYkQ16ZFXn%2BYapqNHxdjwUZb4LRa%2BtKPMjVyn7DDGAIhAPKRh61cAiShASquKoKVC4TbWzSPa3K8RvMlRKM72qgvKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcDJAJRxKlJTjAfksq3APJzehENOygTuJ2KydhQs6EEYEZ%2FkqK2vLSWp8URX5CNWvXXXa5iqj9ajxZh0dQ2Rx6Q9i6k4ox%2BKNhD1qTRlY8sOlXN3wwxmfF3JMDizPGq%2FctxB63UIxtyKNqMu66oVsIVCPXlI7OLrpMk%2Bqpj1UtSzHZgL9OTDHscAwM0Yh%2FBXKLhHh6wbhvGtHWGo1O%2F5Dbua6PM8roNyPEBJMU%2FDSEbWo0IMjgFsI%2BbiiwFWSr5ReCjVk%2BMJ4Aq7RnCj%2Fi2yxVqBvU90mls8Ymv%2BoBuDICu1CV9dL7h2O9D0ToH0N6ISRUWL40ud13y%2Bow3s%2Fmd038gokYkUPhQE8EmTsrXeMoUGsp8pf9aBFRJ%2Fak%2FNO0tajzRaOfbp4lILWDCtU0d9RagyzHIc5CpizTVJNMf7YEWsLsfFX%2F9UbQFp2Yublaa6xsmK9vTJ484m5NnT3JbooW4St6N7H3iyP%2FQZQ09CZEcTNRp27%2F2C0VkiRbYeFxuISQymFWHWhZWDtF5isqqSWzTZWryYojo%2BE25Bq3pQCR5XsyO8ikd%2FJWYq1FpJviNqXfjecdv5nUhr%2FxYeTV2Ze0DEpIkH1ahRcGfEcTgVwdd5ZEme5HTELYtqGPqIA44t%2FqtmPQM6mrvMvLoTCTgcu%2BBjqkATsc4cKYbS6qXrnNOrgy%2F3H9oZhdCW6XKE21X3c3OVx8NPCvkcBfuzr9i7hjemKNuj9ST8wVG9RL0mZHKRvz3YVkShqiy3WnGEsPIYjHYarA7gzexntiQKXPtvJNeAMJ7ERUfsGIKcPrAlHR65SLsiSUNtdPOCoA3PDKLIP%2FRr62lQlNf9R%2BSFF60EW7DQA0glZQL%2BWs7aVyZN0B4vFQUkknfRfZ&X-Amz-Signature=f6feecacbf43a06bcc0be590bae2eb9a7cd5646b2f6497143e99afb6884c8cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
