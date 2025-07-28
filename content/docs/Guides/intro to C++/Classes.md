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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOPYAXX%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCZpUsAvx8GW3kSuDpffWVuE9D6IkKEj879merteem5agIhAMveQuPoNAvFmTVvryAvyHryzi2VU8ywnc6Mh%2F0iAFLKKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkdrIJl2Xv4JIDxXQq3APgp3RrL%2FtcVkiDkl5uA%2FRP6AuDmlvWpg3m7dREBspPdRCta2Wa6F4ELfpdVKj4zwLZ1xjhpc36lHxSIwrvhGKU0ZvGihvEsEiVXa4hHvOoWNWq3MtqQNmqNS5j6exjlyddjnbHIu24sXoEDbaRWcLSzlMkad%2BtKNe4fU2JNlGu5Y%2Bv2Nn4NfXNzXBvmYcyFPJuhwyxb3kRyNifB0r1ceVN7q8MFayoTIwEJi%2F4Bfx3C1jhiKoQUgIws1E6%2FjGTAoM%2FSXc7obCp2R%2FgyONcEUW8Xa9xC2kYNagjMaiL1PouQSim8hVJ5vjvxx1vPHFpACEsJEu1nspugxocPz4RYqMVFBAFCmy8XWjxH4WDsmQH1XD0Nh1NvDvvrRqjxw6lqaO7VKldEiDtNZRb1qLHj7onprZRiKTb40d99uV0QuX50qsH9oYeV0GEqU5Spc7Ezio8EW2G90RBhlt9UOIjlB9RGVEjgGXm0ECJsPbqNLuod%2BWubbRf64hqlYyqcQ5Qb%2B2p3Yu7cL0kgdG0sd%2FY05LGxX3iPh1m6eynB%2FpLshmnf2jpz%2BnsIA7MjC1ANZvcMtAkZuwtV2QEw4L59XJtjuvYwPKsJTsOL7Y7i%2FGN8FCMhlv0EpUxcC0xgdXVTTCnxpzEBjqkAUhE5brlJ0KUF3wLlwkaEyS6%2Fupq9l0SRqox0vz%2BBMFUipZUNQDVQDYx49k0GHApNolfQPCpDCB%2BSAP4HCavsT23dDNZOYEIVWSL%2F%2BiBD%2F1n6ti1GmzARqtwdrgu4vNddLf6NgTnE6Vn03Z54nTnVjh9Hj7SOI0x09Bb2%2BMiYnLIloBAWC%2BieHR5tzHl50XFbRQDAvtargfdu5%2BtL2ucCkdu4IyU&X-Amz-Signature=5cacef9d9bf8b1f161b9c26ea7e43449b9b736ed00bcd8df3e96087fa92302f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
