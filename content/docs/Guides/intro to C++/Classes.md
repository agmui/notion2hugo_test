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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QQG6PWL%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDopLMKmd09ctqGLd%2BOOs%2BppRvTSzptMaU6bZzqdXXGAgIhAIc%2F4BiOSoD0w%2BQLjI3PoDnwh43NeIxPc%2FA7tgIZ3ocAKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNEOVMs9oyfiJa%2BHUq3AO%2FmVPFvAssixzlBwkkDdqgS%2F2AMTEK%2FFF%2F7KReU4JZttfTEdE53Slm1GiG92wyHqWC2nwEHZrmS1G2Saqfe8TXw41t2b6FUkkGEFZdWZYMKyh9DQvq5DpUpOcVjSRCKe7fq7IMRd4a8wcy7DYOXxXVP9OPHe5AViAJJUmtyB2eRUqxTS7JABh4RMPz9rx3jWN3kbfEkzyTIiIKeNs%2FiU%2B%2F8ezW1T1Gbrp0QsDVYWhxEiUtEub%2FD3%2FeZU85uw2ffRHoyf4QzHuTPXFy31E7%2Bggkqx0%2FL9s%2FU56E5uO5UBUyqzubDy%2B67AWqIsdwXEajSXOXlsB4qLAh%2FZFVlk4G%2Bs1EF3PKPlmHatv56%2FUQFnLXMB0b5y0rS26AHeBnVv4QG%2FW%2F3QWEZPnKMlzpzsx%2FjU%2Fsddpp74iNS9xLC0KRJ35seeGLzaBwIdsI%2F87M173Knbmppvihu1YYCUGRT%2FmYZUIFxMRf40unPPWKhTDOyhLI8cbTLN7Gpfx9SkHYBwus5ZCp%2FlOoOR4z4w6aufVDdw7Ec6dfsW9L7oan3N%2BAJmp07xODGjoYEVd31%2Bu0LiLvvnW4mnt%2B4T4kB%2BAvibFjubosnFKnlblhvdvCKiADGwQE99%2B%2FcDVUyJ93yYv1SzDH%2B7e%2FBjqkASdkkxV83MYYJ1cbyAlE9VwEyAK6DAHq%2FF6ldDiTZV7wMjaPCBtpROEBgmbMZpK1wXv6vNd8aDhc4rblwO%2BW1%2FoCaCf0zUwPiISnqWsQ08ZyFLqgXoO%2BdDaJ9p2Plm4SJo0o0kIwp7vWOiOj679VXKKxLtDK9fKSNBi58VQQqKG7SQf3u%2FEMC9%2Ftlad388Tb88MOuYsgM8gM37TikemVrAHVCjoD&X-Amz-Signature=0e8839a083be2379efb5d32e460aee4529141e5fd5a77d9ed42caf0315e738fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
