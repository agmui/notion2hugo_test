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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5UDXXLA%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T210847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoVAUoyjDp6dpfSVnYV3qetIwI6PsqtQ30C8V1Ws0bOAIhALAZOk6K1VrooiHRnDJ49kKtkfJZDZL3mVGPMKZgGYnMKv8DCDQQABoMNjM3NDIzMTgzODA1IgxCTN4oF3FYcQH7IqUq3APbsMYAzzwzfYH74DGcVP04evPTv8Ki%2FqIGUQ9dijQWvMvCK%2Fcwlw4m3S7tSfwWyPSpk%2BexkepoptBUo79h9KldwmZwAYS%2BwqLOIulY2KJX5PdFGSJoyB2WXUTp3hd0KuXTFANGKcttCHfDjwpCVb7gj0p2p%2BLwzOPIAMXMFRieCWV48EfMlZvSRZsWOjz9GZH6cWTPNJaK5foVmocHmeS7nWlGRE7D70PnUMiXmfBObUmjrUCcQgXlybt67CSJrwFjA9mggQf89H0Vhnw3ppsCUADSHS1NtRXbWMzqs45%2FNPt244yDZyNcU5eslnqdzjvhfj7V%2FaYm8dz7S63bHsIZsvTByPdKUoPFyr2RR9oBlQZXaU2S5A3ONOuEi1pJmbLnXR0B%2FY9QX9bpf20Yfx0Nuh34sPx6He1EPj9EnxVCGi7B%2FRXyR1M6Uk6uJBsySlj6n%2F1a1aMuybOkrOyCOU2vwgjoWZXfg%2BxGgXyiHGqu81uupDLHte3CV4rL1I7jy5mV6z96C2DDdiOL6a6esLUNS7iuPn1fVC1wyNwTu%2BztnM2PZzi3mF99ap4tuKGxX5FY8VIzaYh2vq3Yx3WD%2BuYFV7EccfGjB09TFEUAs33mYgKEVfwI0k2cdeAvZjCwpNXDBjqkAYF7hQ478smeXYBxNdOe5nBKe1ZwzoN1A4mp5arfk%2F218jxvwWpbGbd8YLHrf2R%2B6DMUho2DVRww1z2RDoDyo%2BzOmJ5n3Ak51mo6sBURIdw0JyC3cVVRvXOoLt5q7FoYFyyOZN4QLH201v2YvcMh96FlgqfG%2FsRbFDdfUQd2%2Bw0YlV08r2FUifPYoTBKeVPhqcEHEJuf2PJj29fJVDpddhUEtPFT&X-Amz-Signature=4f75a59095744fe60b54b338b885e942345a8692a04a740a2498c08fcabf1d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
