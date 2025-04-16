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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645X4ZUOM%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T181124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwwop9Hqm9IPOOSupY3i8Ry5tmf20PPGrBKWWtn9iQ4AiB93eAA6T4Xl2gg4ZU3SuvmlzlJid%2FuFVHXwL46nnG94ir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIM3XMQILg%2BcMmSfdU5KtwD%2FkDtkq4ldRaGMDdm5XtlsMmqg5BYbjcGPJ%2B38%2BgL2UeME4zYoePgzAt6gDAXeSeswpmIfyx0ml64ymTzqeEK7mLLpQq1%2B1K64TKI4V4igotgbDsPE1YhCiNEukCrbrZ1pJF9Jucb1Tcy77oNwG6i9Z7nbHAhRLjuZvsfq4cOotccfb19qi3LOGiPMz8L51Ie%2FTO%2BzUXlT5Oz6di70GIjW13nLIqfkJehaRpUfOqGxpIllcKRuM22wvwLdA%2F%2BbNtTPr%2FgeIMNx2H5yyIVEvdt9rAmQNAUUx%2Bw6HuQ93a2rKWTqC48jhqjMEnE7TtoToQx7K5jyfNQO%2Bo5o8M54Oqfxm9uxLN%2FTTquZw2j%2BR8FnrpiupC0oHMqBoibRc%2BDqF%2FH%2FHjdl7OAHTq9nWv3k9Q9aarkEhB4Stx5nthEA3SMQuk1pJ5bWTpU7GucpJkxLxm2IzJHrqGAWjdR4AIQOvWiHIS%2FtZZYTd2iC8jJ7yMNsGp%2BMRE%2BECyXqfz5H3c1u45Z7mUvqEJGp5TxyZmC8lEcfAOr7OFPTsJONX%2BYzEp01ZW59VpS68y4%2B3R%2BfzpTE86LjWikMEoFSEj36FT0PEnov%2FwFVtmY8lV6R9JvZtT0yGHvy%2FzSmv9VpVDYzA8w7d7%2FvwY6pgHu54vSxHuxHWHMdtOeaww7kJBubUFJnPsp9XpiM95%2BuY8kcWoEfdyO1FELI%2BK6l5ling3t%2Bt8Rfze1PGS4GBP74YoLZJQbqoh%2Bzp96ZYNKx9YdmSth%2F5O2YRy15JbR5w6z4G4wypostvlAGn6nrX2F9UO8JxsNHScM3bbPA85MT8CuC%2BSGkCTyYmPYZpKMNz7AVC4AQ7GDIfGMymW3lX4cz8qbQUSb&X-Amz-Signature=7b9627e854091d6f79aa7831715d512bf4fdcf2737b2aa7603a5abf6be2c0c75&X-Amz-SignedHeaders=host&x-id=GetObject)

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
