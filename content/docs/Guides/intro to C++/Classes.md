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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5PE6CUP%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T210708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXp2ECO9WQe4u28etjIEia6SBMv10G2SFgAq%2Fo9WhknAiEA%2FYo8KwPBQVFTjMXpCO2pfgzxiU57XBLF7ucvKCojFNkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDP%2BgeZ48Ja1Eahd%2BCircA%2FDwcLXzz1kHQJlEkYxgyQoX4WK5B%2BMsebdc3QUBmNMZWyqdORz1nYqgxm2PMHIx8fRdzSrrIwr0RSB5NPtMm1R724KRHT6Z8EpgKuytf3jC5z1rsFyG1jcn6ZYu%2F11bHRMMg4CoaTdyLyiNjXWuUFzUfiM0ptu0qI9PRatGbUjmiPN1NZacgerxjsWRN0yaW6541iy78jg8UTygbw9Y8Cv2sFbw1KQT%2BsuOxKCLtnQB0%2FnpyTAzUlkAz6O75YuSNOkgWeB%2B606nprUYH0k62ldqfeCXOScFik1KnYCgBKoE5sNYw79TCdiNVMG8%2FjdulfNOgjBb3ulacO%2BW8Yq7%2FN5KElYNSsPJMRv%2F9Ks7pcVm2XfN%2F2ygS92PhPZvA%2BzbWXoSuOMupNZ9oEVoWGHcyr87%2BwWGj7vt3fceZSMQvTxsIKaK4ZTbLC4iRr7uM%2Fz%2BUpW0EHymTVywvytevsL6e5fxITffrNk02zUK0FQRFezWVCdRacpeirzRYmXVs1a4y2U4B6j0CW7XdKCdjF2%2BpiducXBJD38h6rej0J%2BUxbqMCGOLuEYY5jJ%2BGRuN01yE9ulBKaStppNbipkl44sTdYn80C2e1P6v%2BkUTDkrLwkS66Y7kHM863fOXH%2BQ4MLfnqMEGOqUBO6UVIQEZnRHSXk5mkKKfNWH0QFDTqIFYJc4YYRbJlH5MLXnWm6zWFjCwvXPdrvt5hjO1aq1PyY2WSiX%2BAjb1QoGW6FWGXy%2F99h0dePlNzS5EdHyARmzsbT2j%2BhpGZjczdHyWZMnDKr%2B2Tyu5sH%2BF6kVQjSGM%2Fp1a8lcgu4aSWtl9LMKO3GK7vah%2FA1cqSkeAL7oOsrsEsFwBqWMIzh9hxNTT0VxX&X-Amz-Signature=8c11301c845e455703f83bdbd600d661a9654f8f61881b5197213fed8386001d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
