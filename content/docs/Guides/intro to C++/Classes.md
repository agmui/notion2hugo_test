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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6YJPU7H%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEFQJ9rS%2BJ%2F3ovTP8lntGU0d6pr0d2yddxXUDZztLvL0AiAdn18aqkKr6Ly8KT10KWtNyzg7m03WoajJPRcS%2FpKUpir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM6ILfskNSNJWrjVCiKtwDkuk79GC%2FPZSAMVW9FtQHWRj7K816B53XZfIgNWVdhbjdLoWE2bdp2yYlioMYMX%2Fymq4LcDO04DxZqkKW1dbV89KybdU7Ohm7t0l5%2FSx8w8Yn3AHM4dod%2FS6dL4HXAj%2BYMx8JSQytyIRDN1wWJirXWPOcFl5OiuzpYw3HvsjaJgeK2Pnhg3%2BT%2B2gKGTqsZla8ByqBAZoUsdGNd%2B9VrvL49vkugl8nLZN0IlCTVBGRP2R8Zic20WwVsEUBaAL7REXQbhkA2GEDPxfBEJqYEY7ZD9WBZrpR3n0jivbA3LOIbKxevvf5lOtVuOqzSWa3rrqN8nKJHC4vd0zYO14bHgjvf%2FwNzei3R8KDvSrUpXawTHMSyXsPOS9kVEh2Zw0pJ7vqHABjgOocDabRj8whXKCdfYE5uFKElHfABU9IkOHBugogabOgSvqTl%2Fzo7Bmcu7xqPl0ZG0KPnKild9SbSPxTLEXZYpiyT1KBlRAzJcuNgubB5CXfi1cIUtndDuhBFRyzIdEWeasEUbvYIj1YIWDmaZOXqZgFz7gQaIOt6v8zxMWV%2BXeVIKeL5p%2FKpMcx5ciK0BfociJElC3MiCIzIkg3oH3qe28Vjjp%2FK80lQ7qUCUFtihL3GsKLZTHOv54wu5SCwAY6pgHWFV%2BzLXMG4CFzvLq%2FNpE7ddQz5NfJQawyYsRUuPXWrqHIcU2Nu1Wo73yLh%2BhWqh%2BFw3ga8eaPXtFhXAS05NiwRrSZtJdseM7VWKxxBH7y5gMTmk0VF78L2QRv4JVOhv9EO%2F1IMnZ0jNfruhtQVmFUwuEenbTfxr%2BYZigEF57eoAmoyjO2tRZagtgZ5OsVuG8G9vEPuKIr%2FzMGRnnYSBfbewlpME7p&X-Amz-Signature=b775c7ea7bc932991ec1cb7494d966dc7e80e25a64292f63cf7dec05d7804524&X-Amz-SignedHeaders=host&x-id=GetObject)

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
