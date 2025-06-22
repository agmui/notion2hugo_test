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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665KYJS7E%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQCumAmf%2BWiAsUDT8Js1t5hKxKRELKVdb%2B8W8SIqZC5czgIhAIVTUluoeWNTrPppVeY0grPGmeRg9Aq5mJw9KCQ3eI9GKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlUgQALdlwkNmuJT0q3AOAhzFJetSRuDrVtsa18y1FgSADa2aDbySmmH7AahN3V2qakU50k7RQDQXCus5jXYUxdfLTkPwIue%2BFIOQSSPYKlIePfjO%2FH9iJRr6vyyQj5KBJoM0fctzACDrfjEtvjpjjU30x4hClSDJCYzfHzWoM%2Fd8rlg%2FgOV0JqmF5prwiFqH2cUt6X5bjw62VsBcuSG%2F3HSDqfOtcEF5FMG1hHHB4IOiSFUOgp9JSEsw7JLLr%2FWjIBR%2BvDvQwj4vxFYdXFhyYDRsSAD0er3byehKNR%2F9VOmIzRjbs8LafrNeSHjanXHojDJl5gQiF6eSavrlkW7wpAGHIotR6aGWQXuOrSSIZQ2Anlk5uFlnS6U7D%2Fao2EAZf6KiVXq2tFp1go%2F7f9%2Fz%2Bhk%2F%2BBYcXzuyRfhyK09RAGZSrSP390Ki7sfe0MRhufTmD92kHtkuPlcGXRecEE%2FtgbLlqZGmhBBGJV6khhZ8YdlhydWkFxBES1%2FnaTwGe9yc4oNgSA4kKhPBrT2KnpElSMjWPY%2FdT4wPhkdYuYDOw7NgDtJvuHQEdZ9JCojqYGvDxP%2F5CKoi9YmjXJTWyylnMQylVGOb6qD3umKFaY7MWUkHp6OKpzdm%2Bpy2H7rSpirWOWrvhfroVPugKejDCx9%2FCBjqkARSOslLxM45zp8GvU2XyGpt%2FUh85k%2FubUCmZhYmARXiUf%2Fw3vEv58q3dGBxSxK8kchj5QDzjMyOV0fWo7wEuPRmpL%2BrqtWpDHuORV%2Fi%2BXAqX%2BFqbBG74SBOU0MlU8vXthT4rar3aIrW6RHXX%2Fd1%2F9iC0kr%2FN%2F8UnIkPJKVHohS60Rc4GDXK3KVNnC5eREknbkPygnWQhDgLQFXfs4SArrNhOklNF&X-Amz-Signature=3003aa7f9d73cebbc55003f6c4fc6477ff45ed2c7a3e06493a1625439dd11cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
