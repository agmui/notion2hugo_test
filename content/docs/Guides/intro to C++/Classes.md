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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UKZJL6W%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQCQzYvTz%2Fa77OIFyEkHrdO%2Fymvsvsm3qnKNEsaCTLuKtQIgV%2FPxPsRm%2BL30yh3cpZ7pmKKVVrqD5%2Bc5dKQrzQjLMUUq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDJaSzsK9GI%2B7qOu9oircA1EDO%2FlIxy%2BrV6TtWVBTGFt8Jcv1OArvgz8xTcV7Siv5DBbekGBiom5vXEuI6nJCP9k%2FQJgfV4oTCpgs%2F%2FG7y%2F%2FHcGUJnARDis8Jv%2FcWk%2Fgu0LU9PZBr93ZKaZRSVGK9CkQKVN%2FivXTdaG%2F5WuelksijXMfXMTwOHsKlMG8oDzPGoUbLjsjY3j3SsuHMVy25Ixm%2BZCFn9XIpNDyz8OThpASZhsISy%2BP6%2BeiKRNri39VFgYUFJNRNpcXL7b8BCl8uRrtuMSCy4asPIo8iaUNQFJlrSZ1bZ3lirgAzy5H25ywgKbBu%2BQFpsRMTBduik5OzbFl9H%2FnYDajr3e8aldqDvRRnmTZjNBtmWJkFR%2BkzZhdoA%2Bi%2B62A3kU9TMCuZVKaEElkz%2FMVL84o%2F%2FLeU%2Fgv6xwYhU4CjOUCkm4LxLqCjghYOnez5Mb5cSipf5x%2FKT18%2B3c4Op09Nbnk7h3zXEesUE3wwdfalAliEFqa8j91vPjLs7ec1R4cWPAdXgwoKSIHC7LQM7fJdHBYySxPBraf0pdXCrnJbbq88%2BFdyCbQ1imnpaXtx8FVik9FnWzm9%2BdoZHD%2BcQ0e6hledkc0%2B0g900EqLp4TFLENxfEd34ZkH%2B6IfuyvwtWomW4KUUt2EMLi1yMEGOqUBp3sORAHbI2A1L%2BpPHY9hUZNFlzy5g1ChYT1wrQCkwUHX1DBK6zwoXHFpPbJPInJKDhddbbWp4gligIXkYWp%2BJaTCWDYexW96IJ%2Bbk5dBO5gHc7NmWhIyQLV4vbF40%2B385AweCfhG7iuR50%2BwUg1GqPnSGkVzYH8mzqYZkF9VouBF52Fy6P3VtJ0WLwAlJBNzal7U321E8Tm%2FMygM70ZmEqULQM86&X-Amz-Signature=58ea7e0e075731fb077b60f7312d8fcea1663a022daa4052173fa48677353795&X-Amz-SignedHeaders=host&x-id=GetObject)

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
