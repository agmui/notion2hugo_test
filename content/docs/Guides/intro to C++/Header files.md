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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDTOQUV%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T020636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCSq46bDYLlMHNihwO4nrgbAYIlbiZiLIkt%2BL8rgsd%2FvwIhAP75SjNZuhhe1YdCHT9TNIPBN2uXNQSOikN1JF%2FPXA5nKogECN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz87oR6u%2BZaN5DONZEq3APdShYY1uVoIZ0qxiO0aLQTI4cTZI5pKTQ2EmSwdH2DWIjaakHmL%2FJ%2F%2BYPkhh6ev4%2BSee%2Fdai%2F8sDmgSJawoZeyWlyJa89hmIbdtxdf3gqQvAJQDYK5TNRsiYeNqMb1Lwj%2FTd3bZWw3T%2FoQrJj6Ll10ZFUIakyukNAeVQOTyIiSvPi7BO2gW8Z1AYSwJnnqgyCLte%2BYpbwa6YLCqaEgGjCcYwYCf4wbw%2BFuBqzFdpqQAqTm0JU0HCv9eQSF9RSeq%2BbfsAEnS4tbR7foARJ7hkMmVJ05KXKYbmWQvs8DXAVtHOUZhg07CDuc6YObHjTPZWTeXKqClB%2F8%2FLR%2F9vZED7S5PkgX6A10%2FNGTpogIp3A4Hx28XxkINLeV8EgxtZNGFSfXyZ7ll%2B9rTlLLdW9TwmP3d%2F2oeZ%2FNt7ELhYOdbCPemtC4b4BsED0a1DjFPESGQpZR9LGn7g6WEzrMiQSsX8A3uSKB5rQrj%2Fk5gZ22LpZIsDf2DYZNqbjRzYq0KVhYOa8i3%2FkFzRmfTbuNoj%2FXh6hTxbau6lH6AXjvx7%2BR5w%2FND8mKFZdHlrTK6Ofl5S6n%2BlUnarFTRp209zdXC2iM3St47lJs4J7IPMNpnLzUQbb3QSr4jHzu0cBdc7%2FTWTD1sOu%2FBjqkAXYqA8SIiPOrILJFA3HFFaGBKh9AAq%2BWpkjivuvu08UIOFsesMqAHUu%2FViLEvK4bOySbD859eqApAYxVoV0O37m%2FE9V4ti3QRZIBxqrmP9rEuL9v43v%2FQtDV0FHi1kRANE6g1j3wLq2aTmYNgEFpaNRihXX7hhetgFmfkNcDsO7zQUakTmzVNPzdQTXeDoMjS%2Bzfnvjdfmx71qFH8OJtC5MGS%2BlX&X-Amz-Signature=f3ef4477148a58ec4e187d435c157b664eb0b7f11e15d186210958cfdc6d6d91&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
