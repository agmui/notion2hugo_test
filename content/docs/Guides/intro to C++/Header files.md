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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DXGXAMX%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T042034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkla9KKslcX11RU77ELKTL6roZKVpsglHb0uoqs5IZpQIhAMbJFt73NkWiau2iwPBPJ9osmoluTk7QBzTNucMV27sqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOW0654TgI8gGSOSAq3AMdge%2BCDGiQ8Cl7R3XWAm3XigkIrSxmhR5Kf7udzyU9aR%2FyxAmiTSrleCNJ157RHVSXNX6U2vt5q3n4fOkdB3oKqxY3LdVfH9On2dJ3ZTnbtwRLXZjIDBgoNRFWRpIy7YKONwt6LMAYIMxbKMcHDh%2F%2FdVNTF2x%2BGNRgEPieHG5u6I6iVZSvkcrmlXxc3030mphoo00eCezB5ZThow2DB0%2B707jaEh2VERJ7Ax6GhnjrUD9a2h0e5Q6oDyJNw9MIOt4vTzFCJJrqkY1FO3gqGf24a9W6ygKw6s4hs7iweaw9VOjwuGCBkRDrIDzw%2BdJHFhct3wKrQACjeIo6qS7FqGw2Ccvs6jC%2FwyU4wjJM20jjIx3B%2BInWWa8B1TBhg4w5ZuaIGZVSt3aO47LSyB9zv6j%2F%2BERPGy32HGH%2BbxvI5f2GZ4jKGKO%2FByRKilyiVtWLTFe%2B%2F1j2APJYR8wlyXXEYHwF%2BqW1jHtSag0zYEezGMlwn2DtDfDcyjPa79iAWvsrpPBVA8dUojZ88cYTCqoTdz2H586MSJggc%2FhNWpKWTKpet34sfGbokiI2k9dOfWteIa25o19IljUy4%2BBg0lnRdQtgx0ywjKkJj8AZL5erUlPtBsDFesLrROC%2FuP8p8TDknJPCBjqkAdwxifFPFVIUgqcFEyhgxdREHoxmppWT8Er2S6BJCT8odlqNkybKeLGDxVBXqN%2FgILyfvIKgab8Sy8deZUQKpQfLeYjy%2FKl3K1s3mBTqRt0y9%2FdqSrcRRiv09xhyR8%2BOdCJiRGcldLBlFlV%2BmMPdYWM4AA86rDgYxPhUeQlw5r8iF%2BjfVKhJsqOLbK4xvPOBYmf6wbTwLG1BlgCnfuhkiKyxK7H7&X-Amz-Signature=e9ae5fbb29b406477f84d97f234b7b51e01b65436eacb15432a314c268f22adb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
