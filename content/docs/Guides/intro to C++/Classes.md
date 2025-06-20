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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRID7CB%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T070932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIJ9bFVNaa%2F2RdcqZdFBFZdyLA012QXxTSbaDgkya7vAiEA1hLM5YnW8G2IJKA9fh%2F9YOevM3bA1taybzXauOaB2ssqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfo%2FVzMl0%2BaEjOsPyrcAzKPoEBlKEiiI7VHrIwq4qNC4DhDrdJ7lHSaTrh9ai%2BDp3WspTlLqmT5%2Bz%2B7StU26FYu2whNtCUBbnuPR5ClHz2wX1LDV9dtecW5HBmFdHI85TZW9FltpqAA2TfDpc%2B44kB8yOvwMW4T3JEWPLgOmr2m96JcUDVxliheb%2BMkdlCghQI0WiDVKEbHau1cAomg9kVpFz2FNjgrC4z556VRpcVLXz%2FbNXrmIGQ2yc5gWoR0ndxxtU3J1dpmnj4Dvg9jcIrGvXIrfhBB3jz09SNtrQ%2F6rSZ%2FSAZj49hK6f%2BtorIW%2FKYsI02Obze4VBsoMi0gLI3k7%2BYtXziE5rtVhf1MyJuNsZS9NcGXgeFifQRXi%2BP%2F2XTq7wbrUuyNY6QO6V0gu366wzdNjnM0fMBc3CAMhOxrdaQCl9l9YMAGHAusNZFBWcnRtpfE5Q1dq%2BRYATZAe1RVNr7hupT8lU4aLI8OCvqMu4Tg56UU3CKwiSUwGEchoDn44j7Y%2FUeXgi%2F40xso1oUIPiqDp5KAkIKGB6PxFZ789ZQx8lYOlQlj%2Bkyd%2Fqe63A3vDdXOGU4f5bUX4d99T6%2BPcogTlOs2nEetS5SYP84d06wRvFuWyF0DrHJwR%2FPHQhjA0CweHLdPN1uoMJ%2B%2B08IGOqUBmUIzi5Oe69sbvw%2FR8oGVulGKG4l61fvfwd%2F02I8Z8dnhL3INxrdKbZD%2Bh5sWiUJb546b3WP3ohOfJJwQst1OGfbq73NohpmI3WFxUQpQffK75xI3uFam4P4i%2FXXBH%2BLL4hSjrYaz9bBIZVacovZTJcc%2B%2BjXmUCaF0WhW7s876SvZgQSoYMTtS%2FpcC8XoTZ7sNtMIEr90qVZwPIWolgNbUoUoNXVd&X-Amz-Signature=0d7350b15479d3f1eb1061b1a47aa39f328d8ec71abf12a0928617bf60bea7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
