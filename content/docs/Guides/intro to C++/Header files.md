---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFM5HVZS%2F20260702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260702T033702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQD3UfPWyCrwlmxzvJuP0bGnRB5ZdgSgfk%2BHGpzgEBGETwIhALTjGgZA0spppEPGUB5agsNopsnG37ozWyepxBPwu7xEKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrAdtC87nlKgTXj%2Bwq3AMGIT5mTTj9SSOb0nYfmvFqNLhhCp9yfPyQfTM%2B7wIaXilek8NdVOubG9R%2BrI2AtikkZWu5JICkInTAL75959evecNzH7hsY55C%2FIXYevibfxQntU4xMb2us4yf%2BIjo%2FAadKFRTi7wsNcfXsbvWEl3FokNdquglEFQmxN%2B6T49sVn4kXUKwGJj03IfQzbKDYyq7XdG1zsaKP3MqoarUO2EpgwKBh7VQbmx8hASfRnak0JpGT8lsKuHfSxgEVU9anvusTCS9cqOHuTGXtsur5H5hDFo5wKYHvIZOyn0qt2xptCCWsJhOXNGN6TFbLcA%2B3DyPvVojQnGJCd7DbusCEsloyFUtIPD9ZCM5b3j3K5vaA781J68nerFn4YTT7JLUNeFaRzyzP6EP0n%2Ff4km95qAnnyXIrPx%2BTMQFqA31ePnKCvfbI0RjcIZTzCZYNj7M48diia36zO1bkWkzXCVqjLg%2F%2F7MNqmGRUpYJbjNcOJ8w9xlZm7tUXd9kH2%2Fbcwmi8Q22%2BOKa5z8sZxTS0D8c28EA6n53sP%2BZjoP9b7Tp0AN0%2FgbvhwRJeggeaRBtZn%2BQFL9FurbeHAqfvoB1ndfrFrXvCe1dW2e%2Fvw%2BN9v5hQ80s3ElAZ2MYWEB3AnK0%2BDC8oZfSBjqkAZqVL0HBvdft1Jr5yL0oleJJNHMkeHd6WmtXL%2BMkHM6rHnND5eXUo%2B7NHwTD3qq3dNcL%2FeUefbJE96mEdrXvaPiNhv0Br1dKlUb4E22PAvPWCo%2B008BUWahqrIVu3SJrYycu1WWoDjCj8cl3sDdME1oJow2KkXyPOF%2FMTy%2BXjArJt9m9dbNNa6WzE0%2BLnDzRAx3p6q8bmqwBktE84t6kw%2B0L0SBm&X-Amz-Signature=be98b6cd8abb9581e3d403ce29318e3e73c0aa934ea548b369670554ab24783a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
