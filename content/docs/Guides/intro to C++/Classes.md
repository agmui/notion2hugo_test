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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMFVC5P2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDatgVyIXAwaX4fsYjg%2BnT5q0Oxsw8DW%2F572na0QcqFVgIgQsWDq5wj9GXe471VRaCffynhvhr0znQ9Q%2B%2BxomIaWRwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPTPyxJCyG9PqBIkCyrcA1stKVFtDrbPKDSgUB4iNrzhEui3GKfsbEDx%2Fb3pEsGi4%2FQOqUUxfLnMp7oh6gKVn1lrThfIS%2FSxONVBb5EBaGplbQUIOyAlHJsgUsrpOlnmICTGg10nGYANtc0KT1QDtBKlTFP42O3s12HawoB1pfyh17sTJ2CmHmq%2BDTNdb9Z6atE2kbpdy7mZb16UZ6FkVJ8QWEha%2FAahjK1wh0KmwomeKgOid5t9Aw8j%2FcY10LpxTwAh8bsV7bR4s4379Lt9DacF5NIsUU3Sn%2F5jIPBrE6fQF9UPc9BDpxS9fCd0uG8Tg%2B%2BAVfNzwN8l1FHM60fItz1pLGpWqAMNbKLuTtee%2FFfgBtX6eCownpLzfBLvdZgT%2FU0QJqU9SKJcEwMZQ2zLoGfQQHNgrqaU1mj1x6i8k7imfjWyAY5Vp7j%2FQ472QM531AvoWLRA%2Fu4Jj%2BqWnSLHkktUIN0Uk5OWoxiPlTyv6x9ApPL3iD2KB8Y%2FpdbaDMBFIJ6AglLW5SDwMWSQQLbkPfo2%2FlqAsmHX%2BcO4ydT9T1eId5fyzSuRZGWtOzdSpr4AS6NV5ouP0BxSLIGhjAArXVg1%2F8%2BTyz%2FmzsgAz8MaiNkZh9hyvjf7X73U6COzTHtHbwrcamR07p3InamUMNKGjsQGOqUBZx8It%2FeybwwI9vP3ssBmsgSgqZE2PV33fZeNIw217j5jExvNrAuRoZWyil8Tr%2BsP%2BmYrAMbuRx4H7OYiRu7gghvWqXXrqJKyUB54kdsWEIzC%2BBQfexdCc4PUCLlwdD643mjnYc4ylgyopx7iYX6IkdUv%2FL0zg08IgUE3R6I%2BebAXdIoEhnPDlSfJoRlsGBSF%2BVb7AvIT0VjkW2WFKEMXZUlU%2BPJb&X-Amz-Signature=fb8237182092f980e3130bd61ba611f3f75aca46012bb61777591972d80c2427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
