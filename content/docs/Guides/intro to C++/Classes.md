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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJVNN2R%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T181118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE0R%2Fp9GdQZpJZBT0pneL9GH7ZbMYFT3VAJiNZETxofuAiEAmUwSKk1%2F9xaWunN%2FGO3mz7fq3cCEdIq3%2BSwuqSv8haYqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAsVstF%2BEjqKIVn5rCrcA66hmDj98GiSp%2BGCBktCZxqy21jAe40qdHK78IGQWN%2FrzVgX1%2FbTGnNVv%2BKYYTj%2FkCSB3Iv9sc71cliFGj5Ru2a9DqkGkGkYUQ0lGvl0YWwzxN4yWU72urPD%2FvkBKc9KyCXU89z9Bw6HxaLm0RKQvXp37oAIACfd7sZLylzAujsU%2BGSIlJhAP%2FJu0KQEdWMmDhxT1gDvIU8SGlWMB74OfKnSnlJhUFphVwAghhqyfJaPcWlHn5Y8ObkJ%2BVgpQ3snHyaj2mkBTCu6rKiQnCNEduWbf6zMfUcTIqFsQISywB3NmNTimZetzjo6kL%2BZHaSMOo7oMhCI7LrbrKQNy15j0JHXkvrxR%2BleGMbfYZDT8BuByNugAP9p1Ii1mpNUna6HxKxqa6XLXyUPpJ%2FL0D77Kj68L9wxxAdcKTrfzsGkv%2Fsqw12jvIyCvibf2grdoYKmDO%2FuX5Es0CLDj%2Fr1otulIiRp%2B%2B7aWuUQWbbK%2Fq1RYDIKrtodnLRguVCu79Qv3AEdQcoWyInVC3%2B5OXsuqTnyvtF3qwIbeQIa%2BxQ4se3PGx1rfTcBFFFVTPPJdYbQdI%2FErNtkySvP0OxLgkfCKAJ84sGCI4RZLz2c37IY0wDD3lKfUqlzrsN0JvRNFqM2MPbq2MQGOqUBkLJ8m14ZGUoRpapAo6w5Y3y%2BDseHlB8QPSnSB3CnE70h88cdUdDxlp1E9sButNOo38hbTTfhkSosYetbeNHT6k5KeGnNobpdsLeJY%2FY%2BXfKWik8LePxERC7ysO8RQwnKIK29MIn%2Bl3OW5pSLWFvy60xPWHsTjos2NhqW8JRc8WWGDsCzhtnic3w%2Fh48jgNSFyVMM66ewPXZVVFR7hjrCwhbD2%2BaM&X-Amz-Signature=4684f9457136f5f82460d6866f656fb22c83c6742cad175e0d8de7254b70d7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
