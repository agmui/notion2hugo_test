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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLR55QK3%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T100559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDDlCGoq6aso9VD2bX4tSF1rBdksC4SpBOslL0XGs2dZQIhAMUsIRs%2FiklJME9KM8YY0kZ1H6nb1SQD6lex%2BxNmSd2DKogECOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLl5RBqLiqr4YwfL4q3APZQ63p%2Fkhw8He7mqTFYTIH3QjSesQvOahmoFKTONb%2BOta7Tfz8Ab4Ts5vFiYCtK6SutFmIs2nTZl9ZnMRfUfj50ph8VKVnbxopnvg2FtW6J1B%2FWNQO28AR216TSuBzEa%2FHFO7L%2FyZPNDf7ZCMV0HL2jUscUMCdERL7N4y2uk2F%2FOCirsWUiRaKy9kPjLODSCMdRVRfouoG6nWOAwzWTHfpgj%2Blmz%2FKP8jFROqFSiRBz7D8V2kB685v2Pm%2BY8ucongAAZQvX7ranx24QCc2rvxDgjC%2BOkkatSo8bxnu3Fgh%2B7IAuz5suh8G00w5ylnAPm6APjhBBsdOCZKU4Rf6JgarWjjVo%2BGZ5N%2FN3E897lZP%2Fs5rLcIAjqNO1WGLVdJDuqLbrYB6kzFtGcXph4vFd64I1accPKaOJYOzISD8FfPHMdF9se%2BXQ0GjS7LG8MzX87Ir3H%2BY0vBR6gYBzde9yCcMorWDVvCQOScx50c2A6JZwyqAeBRfXumryeJAnS5b5z%2FNcx%2Bh%2Frd0Th9zwIjusESQS41hpsdbKr7AchM4%2B6iLe9DKki7wA8hfLprqsOG1KgCl6FS%2FJtFs5kAgLUMNFetDOKrzb36uVvjAoOKs%2FaXFPho05f9Jl7I%2B4%2BkNqjCpyOW9BjqkAUHvkhIbCy%2Bi6CbpJmKp%2B7v3Pxb4oEMuRvh9wKreocS%2FTuhH4nGGcdP1wJlGI%2BMQanN9nbsjLK27pFW59%2BmZ%2B6U9EztNsZbxGVRpuk2H03R90OtFS7G3GE%2BwwCAk2IN4gE4d7wZq0VSmYJ5AePDFJsPBrE4zzcDCo548Z2jPhh71Gw1SCgtg5k7JSOV%2F2dJ7UqIIWnAzWiWfKqwwUkpiqYKXnIEs&X-Amz-Signature=f460f13f86cef423ed7febdcfcce0d298dde666347da822ff25140705a0776e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
