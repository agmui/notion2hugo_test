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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REVD23H%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQC09SL4zbIz2G9AIqLpakayt18wqxTK0c32rNA5Aw4yzgIhANkQx8qHsdk91ha2PayCoAzHIityjgQA80TeOydVv24mKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4I0r1gbX3A1ro1xAq3AN%2FAiKnSecAIYgb9NEq5h1%2BfvBjYGM2WnonkOKflafDgg5d9xfCrjBCwhk7yEDbhr5p3K8I2n%2B1iQjhi4093Hys0mIm7zCiyfrhnki%2FcdTtLWvU%2F9f92orCA%2FpWCqLge7k0nXhrRgh3RtLDZU0z8PecVoUQSkG8Dt%2FXYJv9Xo8wa5fVOMwxD6zONnWsc3rqVYi5YUj37tRP05pILqHw4IGyYWGmELlil5IU6jZV8SmAfcEQk6DXpLbHV1YqQu0cBWrnRAYksvqMNbdbtgTLdUpddkpbYNXvB1p2AYVqyuyxiVL7wlFm%2FY%2F7A2gJrez8Xqc4KjFLAVdPnZ0vXGLxQde8Uvo9jxIH0Vb5YSfAl4nPKWgZpvRRGj14KdOqXWxi63bFIyvvOlsue%2FVf2cY4okIQ%2F6CCD9VtpWcYgWggyUyTeDyQwQANq3P3j4Atms3HjMPxCMxVZAw5CIpciVx1HdqKd8WreQ2eLt0MFyb5O8kVCKeJuxkUa5zn7%2F8PzRoN%2B10bMoDFZAWSQ4PdR1DKPzmjO0TCiWI79JcZng%2Bt3RejXoU0ATpBYe1xwI0mODXfrK4zA%2FCDQ8giyBw7bBCOWwGcBtQzghd12oKveGICyy0C7ZM8coTUVC%2BLs%2FG%2BETD876fGBjqkAfaCweUDmoW5hgRgT1KgnCLwXQxWnSdEYvuEoRg6nofC0ytYUg5GuETDrliIu0E5aMhyO%2BPRv3leVCrqOqR09Z8q8UpnHZePdNwj1zyictOu6I%2F6Y5sywRSZKKCpybttazXOa2KKcMWhnfBg0tgYJDeI5eR8PPZxkR2mkqQikUYD75qpLRotQRiVYnYcEMD%2Fithm0ctzwulupDGmG%2Bh%2Bn%2BJuHIkK&X-Amz-Signature=49e2010278c27c5a1dd0048275dfd852116030c439009a6280a544c0cb7f0902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
