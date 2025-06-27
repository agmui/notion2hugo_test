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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TSI4RKS%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCm4qZSHDp%2BW4CjaiPGhQsa77IHX22EBM3mSPBjEXNrzwIhALRjiNCjFBVE9MWCjQRTMuJF2wtArPZvyrpgcVh0lJsoKv8DCHkQABoMNjM3NDIzMTgzODA1IgxokSGoJYnfoJZYP%2Fgq3ANxXTAaJTMZtVd8LnVOvpF789dZZ8CuW8amf4cb6%2Fvc72OkANF6bw3fKMLrQ1rV%2F09rtAqUC2LWiru10KZnP5CUSI7nwVA4TwQTmSPKnCoHEP2iroSBc9IqdB9%2BTJbrnGcsXFkKl0fp%2FKgzI%2Bc%2BpP9E5%2BAcVjBg3%2FbOH41ItOivv0r%2FeBz%2FfsQXqGa8ry5YBd%2FIj5VfFiKZEKhSH8dfWrlR48Psg27PQ9Vzom9jLONZR3j0PjMLgRAElvgTQquqFP2zD6zEYN%2FIfWUg6zG3KqT6YF7f%2FK%2BUNdZpiiQicr25bbBkdKiRC34C3Lim1BasSEThQuCpysBNdzDt%2FzaIGasMt6gLG5l673SNtQaDaryJnCxTst%2FYRky1V91CU1X2vpEeTl5vBK9NaZq8GfYXJcI00%2B%2FYyO4qjhd2VwbfJvWZfbKOeyiAQAT1fyii4R0QQNqLK8NsZwFKpfifP%2BzVyBKmTP4edeSo%2Fp5Yyyrmy%2BRKHcMf1JyaGUvqo6dHH%2ByOQfpIpIipJnTykERniNIFbg%2BkE33vJ9Ly%2BAfydictBS33Xz3Pa%2B0MLO6fYersdjMY6STAbH5eBWELkVGL5khxynwh2GJt17VmNDG0fAGX%2FDcVgALCGscFa9wT5%2BQqTzD%2F9vrCBjqkAWmtO%2B7hwP8vURG5uCiWtL4PRob7H%2FhOMMn85e3gcOPL3sdcVXA3kWVMaHhDnGi6SMFPXS6Av%2FoRQmjiirDbdc8%2B%2Fh9DRMZfo6fBZW%2BPjbwF439lMKCpkN5mCU8k3s4FWeY6eR54Vd1hTNX%2B7nO0%2BKqBbM7dmuphnu26KNUt4%2F%2BU9%2FaOveDZbL8tYjYWMu2skpJngsk3T1AThpw8E0UqTsOEufnz&X-Amz-Signature=b127cc86d08b03729a5f13eade18727e24c58c51e2df23e5bb90a050c4b0e3bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
