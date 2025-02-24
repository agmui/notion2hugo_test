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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK73U3UE%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGFgTKFQnxmnbm4fVv%2FWiIBtSt2Uq2ruFxOZ8%2Bqrl0eVAiAU0y5l2zJ4T2zGsqJl1v%2Ba996rgg8dEOUCRLbvf19hRir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM%2ByqkqaN7CJTfbaPDKtwDK3UxSxZ2bQ1eeAooPdnUzaGuWvxxiFml6CWt3mOt1bGCGge%2F%2BS7XKsvBlhLB3bUuA9F20XCroh1V3aZtHwZcyg%2BYB4Awpw%2FwIlFzA%2FMnq%2BLktmeH7BZBWM2BrGkuKTlySf7YczYN%2Fdf78zAdIuOLfOjMCePF%2FN5JgeinMQJkBhP9BAZzVm4AhUJzuAjRgrW1kokydZgpDd0pENiPhnZC0Xpf%2Fe1cMVtQxhJ3Bv4R8fWcZun4yge2ZCYWGP1nzAobLQNeyi%2F1ymYdlMNE5N1as2idcL2smlUbWK5XSUF9YpQE4vH91hqQbg0NgZHzZflKU%2Bt%2FVU%2FJjk2MWQv%2Bq7K1natt35SXmIBsiiJAlhShur3Eo3i0e7QDYD%2BkpY8iZS08iD0BLrLPlOkqnZiKXqMLgzi4DynbuT4iBbpJs5DYdFmnN5gQfYson8AMl0ASM0xjsEW3SWRvqrkGAuN6pyBL9SZGGoAe71ksJ7mj3XkQPLAw5ViibkeLyAyyEtKDADoTHbAunt2oQxcJUMFGeQLzlUorxfg60OL8KaDGHHlDDbXBYJmLea2rpf26LkgBewOA5kqkU5LI5280%2BSWQ43eAmb0tBqODCWBwLrzEUYFBaZcWgfKm%2F2ZmNNPFZPEwv7jxvQY6pgF6FM7%2FoeW3dyLkd6GqJxrJyxLbU2FDBmVym1V%2FXJEamOIMtmPPZUNR%2BXnTek3Ewwreumgob9nKVXrc3fh1w8x6%2BYFPremw5W2fzXnjTjc9cxkpmy4UpetPGvAvEUp5Kwrcjs5mlOEqb0JQeX9xs4L4Tf5vxlg9UC1uJoUqT5XwdoTekHbPFKtBBNyN%2FTIYkIt1qZtK9jeOYDeHPeFXuHRPPKoUsNxE&X-Amz-Signature=96acf598b182ce475fb532b0fac31e6cd961eeff59d38fc729728fa669df514f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
