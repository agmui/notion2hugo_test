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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652WCQSTZ%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T070104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIF3uqBHoQzV2N4EJ4Am7NuRPGnVK8nk%2B%2FyyECI551mgHAiEA4YaRf4%2BSS9NzRVXGi7KUZw587V0gH5R5pfajuuUdUh8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBP2XWnBzwc9828c2ircA3gSlPNKI4Jx9W3hPYXFJPSmJJ0DjIHC6vBJykaaMoLQYExvygPPcdcw9QUZVDSVvE93EWZWaUgLgCgAJS2YhUAlO%2BpDd7obwz3WbeDZ7p7XKBRk%2BCVu5He2puxMtp6u%2FOiveHyxelDRmgAO5QUS19d1OlxkcYeZyFZ7Qvb7OHAOBp35goL5WW1q2W0wJkhVKX0FjLeS5mha55GqJaXpqivZT94vB8la6jz7zSxaak531fluIg76CbOJdkqsj9yxDbxCdJGeOpUm7BksnFuUuLSq702BRBWPz4uprycc4tKQnqdwAImM2EdWNt1QtlD821WPE0v9vfe2ug3UkBy%2FI6w2pfkt4xHfkSZg03aUTxYz2u5ww76qR2IGvpP%2Fb6yqDZKYtVQLN5NinlhEUPVQg2kyJZKXl01zFQRWctzraFZy7TX8KrpnagQwJXexoeSVml1ZAl%2BXeoaB76eUrjeo5Tk%2FHOdushiw6MQDyGVRu2t%2Bn4eW0sH8wheHnDMfD7hGFxaDY8HRutWUy1%2F7nUmO0RsFhCDtpeXwUuwf2Lwnfwo%2BvYZRRW0fIOs3KCB6jrIWeoqrYVOnmjDeP3CJiOusOybHb5BKtAwR3uf5sZPOrcR8jkv0MLLvrg4KikG3MIzrtL4GOqUBN%2FS5o06zPwGNauI%2Bm56ypU9vZmVfpFH38evI0JzZ0f5Upz3T%2BUEslRNcVtQxvmvQTM%2F5lVKoKGmjOtkX6mSyO0WVX8%2Bps3WxztxZpVybTGpGEAEaowL7EjZSy8YtW6zf9nV7ZxD4tOmcUhBp7qd1VAR382h%2FsRd1fdohS%2BQ36qP24Au3YP%2F0iB0GWCH4GZ49aZkf2Z4BGctv984ZDlCBCMcwGuEU&X-Amz-Signature=ba1c5eecffdb5578effd0c480dfc54cd4a7ef873e2fcd864164c15e68736409d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
