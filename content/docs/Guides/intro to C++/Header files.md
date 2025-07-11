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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAI27MGE%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDipgDM8%2FhCztxotLssH1pnsDxNY0TEKBXvFifxNhZrdgIhAP3Xuj4r%2BjQSyApKLbAYBIgg7OxLanTulY%2FMDLEBexEbKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPH5Edgj%2Fy8yOR5rYq3AMnNlw45xHaUIErmqR3q%2BRbz6H6S35AAicoO7ZXDlZ6%2FSBGdAYVjzgYwyqOu5Vs%2F8eRkjAdS9avQ2kcT6HAy7MqsIrQe6ZhiuR2yRZQPot1zuiznsqRnrPuEfbF%2FpLUeQPfHRdylMkKZrsT3UGtSFREuu%2Fr7OqNdARhzzKbP7X80AjWQFzQJjKDUWPztPinHNCiCDdAgHUu5yEiMTTej85HHS1uj6UwLy7T9%2FFa9jqxV25MsN5uVyKqSxEARS6NSZ71LZgoClErBYEorRV50AupCd7lH03NoJN2RbqmUeoTx6%2BPP3zkB1WXrGHcdUhT7dmrV1PywKHlL%2F4o0VpMTGO21PkjEJwv0r3Mw9cWN4%2BGRrJDBZB82dPFmaI5mnLuajCkK%2F94WuyhU77AqEPyYQVb2zyJgZq8bq2M5%2F3jaDsvjcIoSYeb6LUoTIStBjEvBFP7tk5VNlRhLhSQmZqTf1FMrckbNU428zK3EFfW9imzL1V66cMXH9Xv5uTDw9oh2UUZZY2QMp6Gk6Cp5oU%2F1TBnwuXmSauxSmNx%2BblevXMzf8DPSOX%2BpJMfTO%2F3LJsZaZNLBlmTRf8SGlg7f456%2B93b1YoNkrvkSG7FdNjPrwTOx9vUfD74eCxUJo4DkzC6%2F8TDBjqkAbfYRfgoBk4f4hjJbTGjgCKPyZu7fgO04WAQ6IxvS%2FfIqgHp0hrxmKXnHaEvw4heDhbqpLGQF2gXGFAgJEE%2B%2B1tiKua%2B4%2F5uYk17SWxX%2FgSG6xVxbAIZ2dlzgYc8G0VROBrJp%2B6Al%2B2Y8c5XMOiiaTH8wQ%2FcJJOOi6y9cnpbG%2B9SOVlFqDmbJOz2Vt3AdM%2BNoJf8N6zqX9jJEzmu%2B1CziYmanZw0&X-Amz-Signature=99b485ec939b51c3cf8bf272ba4832df16348bb6dfdd2c70274ecff21fd96da4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
