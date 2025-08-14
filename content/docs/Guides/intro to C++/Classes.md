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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC5JZL5U%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRHzgT9W%2F3nV3zS8ZCBBKL3knfbHmMGWBYX3VJfqc14AiAO930bIUytmltyTdXwEtKgPVqqw3L0GwJDM0PhochzCyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtdeo9sxl4flqvNacKtwDLWxt9QuYn6d10k3insPkRAITDxg%2FMJnOJHXmjYsUv%2B5up8nVzG3IMKUD5UPcPp5285nRfIBub%2FYtVq4BpRpzF%2BH%2FhPEUlAABPOfUfv0ZAI46rG9Kuv5l12QUaKagKAsMUgw%2F0LODNYDL2oiHPTunGw2ebV3g9kwGRGGinHg68z4JEsXwjYY7zZAYMKW99hvUeO%2F7Gf26AB3PzxWBbTFRAwW328v3afTkBdtzCXXv0MPTxfWym3wCzpc%2BcHrR0z1ecl05w3Ktp9qGRJsc0UuPFsHOCvsgvqg0RPDUdqpmdEngyEF0BrsAIycjqcD3V%2BqKomYb%2FEgq5aH9CDkqDXtCj4cdfmNBMRSGYArpU6%2FbJh4Ycn9vsLgQJITdIj7Vc24KVzjs30SpLuLWTZMXNY0bav2LBc0bBjyAnjo0OiMbnEBBNlkYihNFPbg5mV4goKlNcCAzQ84c%2FA4NAMbUS%2F5husPViPB89i2tDqPhy0SHYPYSSoWfWnKiJNGPptm3KMdGUWkPyh2FvpRn9crjRWLlWoTcRpwdoLTU%2BmM3gkd5GASdsgL4leE%2FuWmkIFjytrlSSouen1hrQaw2Lei9ZywC%2B6lEVSRQ1gmlKp1glQA6W4zOfD%2Bp%2Frx0UgWKIsow04v1xAY6pgEquvahTK4MjlfGYlKuieKGEnONEXkkpLzNgnnZiyLqySdeGtGAgF5axQo7lHW%2FIHCad0uJ56bvM7UuGwraLd%2F8lF9VuU4FdvYPNJhPdP3t206WPxnu7Gj11l2k1FP4vOGGsuf6kY2LLXFaL8sU7zfWEh0CeOAMdEaxUaujg3R4XXdFyFWF%2BTpnD5bgjddwu2Li9v936qbOZuuEaR0Jo1O6BohB60KB&X-Amz-Signature=f0c87e02cd577cfb111bc71763446db368bf984feb281c9cf4f117f0ef2c44b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
