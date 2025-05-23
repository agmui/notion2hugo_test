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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZQNIMO4%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCrie0xbUGl7XZVUyvbrHrgojTGgunWwpO6VEeso%2F6MbwIhAMDNbl4ElgGTeXh%2Br5wXpLJ6JIuARvDLGZHH03tA6DaaKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTYc6xSb%2BF2TLFvoQq3AOaGFlLAqP7QdnX0DmLtl1VMtmUeL33RFB9wiHeZcyQnhNUQVphrKWP1f2Fqqk9oRW80TG%2BoVPxRTVzQth9g00LjyLaWBFKqIrONf3aiBZc1qFmsAGFQL1EMzd87PLsHWJz4Wf2GKVH7Yo%2FcliXrEp2Jg4C0ZA1YtKenl4EruX%2BvgUT4AeVtqd7pZRJYJXoUeQ2J%2B3cUYUBU1yhcVNpbAdnhQD7JJWmb5xzm8tqJtYLOFo%2BdgLB0miROiGLYAlkBauqbGpzVaFHD1GdqBhZfjCvyNeqNqdOWR3E1l5IChjBPyi9mjaUkbNrZG%2B03Kvt56Y6xEUOdqKO04UlvPhYug5safE6F3lA80GbKFW7mXUqxcTYGU2x8sQyZRnyoBmtZdjFUCV7UR%2BPEJm5geQ1%2Fx%2FF4B%2Fl5Q81EcPpmzpNpI8br%2F%2B%2FpQzT9yb%2BxldljTkueHMu1VxB8neax7l5fqZpWxeYmg7Jeariaboiaw5mLSHSKhbl06espqGU0TOSzNg23r0VS9xV9galOeWN5g87WWNXW3YFPPOURfPAsPQYjd%2BP%2FdLKjrCTSuZGiaTKniksy2t7ebgOKj6RTrMNDrAoffeJ%2BqBS7p6NIaSDpiS3naCVwo8I7zkzcrzvK7tUCzC068DBBjqkAbuOeT5C1lD0ASBNkYFFmnVgwDsheP%2ByN%2FbL6tOxvYrrE5pVicYEcxLZ6pJlu83IcJEIKTqIhBdmNWq4OTxflL0%2FwKCRSDvJ1TFDRntNxIHbqV5jk3K6LVAtq0gEnrRSWJENkYgXmmi4V64Ea%2FUH647HRYsDmHgseZRD3YW6jgHs%2BWCANp5kKN3BS372ZQ%2B%2BWF6kouRCfxIwzWzcv4gs%2BkAEa63C&X-Amz-Signature=d193d41be804c2a694ad391ebdfba5a2296d030bf9273f006b691e9ffc0ef42e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
