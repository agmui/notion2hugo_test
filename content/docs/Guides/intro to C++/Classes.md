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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCFRKNK%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T132633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDHWcoyDiNMD1t0rVnWm0z%2BMNWoQm5tNWSK%2BP64RZWogIhAOZrdnQQB40Us9HUvTH2SPYKSWAUgoSewmeeDOg8Q4z%2BKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igykve%2BxXUI56rC1QsIq3APU0mAZSAwibGS35kqERY%2Fbte%2BZXT6Cz7fI29o8SmcRXJqo%2BvZMtridND9lU2fXkvn80Z8QpvrJIUtNsMlyXVoJuu0OSUXhrUI83SizgLg8Dqz4rklPjw4IMeFwZxToJe1Moz4BW10Wdl848qIMaR%2BeoPtA0kb62cotMTopEc2sKC33rSMDyTp8iUXEo%2Ft8QEc0NEAnY7%2F7PD3SsqJeytZdWTF%2BPDHcdqps1R1igFt6YkRKyiWiVmm9dzkz1KWGE8nVxpDK7dPVMlTeM0omMCbcNyBxIgdXgnHIqbr1%2BifUnWTrzkw0VCfCMH%2B0xR1RxLDDfoI2CebKt3nXnGFUEsGDAKTsBl1kUcDZAyGmvr%2FUs6akyVa%2BvNwrWObDIN40nGJ8auTWz548kb7mbvuaDU%2FsBn4jp0PiE6zE49vMsKVkoHsveD%2FN83w95CZ97tzAK6cSUkxBZrd%2Bw4u802P369xBycKIc06yc8nQxjqKK5AlmOoAJXS0Lz3oMyut%2FDbVaPsXjy9i2yYQDxBKbfpnZcOGQsW5jwHKKg6Vya8eRnC%2BP7%2BgwE%2FsL%2BoKn1UzMlhHyvXtTEvWMchEUq%2FoHZP%2BW111hs306tolP93um8K4%2BihYqUdD22wN4dZg0C7AIDDl88rCBjqkASFcB%2BybZyDpvBKQD9LXnVistZU5ofTJi9uzY8lOsXmaq2Si24cfhS80K4BvvB0j8HdPQ5z3DlGE%2Fw0EwXJF2abaJuYoR9F%2Fw%2FWsSlpJTjrBeqG8Ec30thynTVcRgQf59zZ1Kzdsu9nvm5wUFTh8MgBSp3WRJuwQSPwV3Aq9cj3Y8hlZESZ2UGtDY%2BiaCvDtwGKa6MK4EqWXTcJve7cab7XEOMMx&X-Amz-Signature=26b32b0c15b5d2ed8cadc0951255b0ad5907aee8948251ad16f868619a4764c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
