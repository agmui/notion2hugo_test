---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX6OKYWK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFn4%2Fet0xW851qT6G4JMGlVCjmrxUnkzprMu6jNOTc1%2BAiAGvEOMyEgpRIs11JNbHric6BnaCOh%2B0RhoYPL5J2%2BhqyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvfWWCN%2BNd2QNPB%2FyKtwDcE9Gx2kJahGp%2BtPeDi%2FoTo3XAnojG8FpkiaKEteemLwhAjFuKmulIiiDoiKY3w%2BL7c79K0Igzh6OfQVloBIvnC6nRX21AnIalISwuuh6E%2FGOsSPs0W6SkTz%2BtyaqmXFuIkS4nR7WSyyBboTvjCODRzOP9b4ofT%2Fo1YaCQyj3dxUl4M0mFduM67SRPIRaXlXJPaeHz9rmWFh%2BcpfIw322xP3nHlPT99HXjmppSiGnHWTy4A%2BbbpUpSti%2FK3dUAv5%2FNbV3I%2BjsWN2hWrR617isVuAgqYUPP1oKkh%2BSCiI28jpETpLV3rxbQbJQ1vWjeJFkSeh2Fu2QxsrF%2BUsbqBeW3xhzgwKYvmMowJS4F6KclVSuF7l4fnb65OmyKuLIoW8VF8XyZPPP71cUyJx9iNxYofhuIkbBvZ%2Br7uLONXTDERg5IIFP6qfTHj0GExgP4QlSvjkDmyPdKdbUl3OH7sz0gLZXxksLiaOK7ZyZy%2FLWwSWamG12RgRT2C%2B%2BrLVjQjGYlGLlOwaPhnt6iZ8r19OB%2BZk008uCIGX%2B1nU%2F%2FiLgL%2BcOiyuwWJJ4DJCR1WBKYM7YBTyzxRSTC%2By9ZsD5YvQuT1%2BVIqVRUBiDMePM7EHg7TIvbbb%2FLNBoeo2A4BkwvLfnvwY6pgHJwJd3SZRjx1EgpmNZLdyXakrGO2%2BaLuGn5%2FahNBCa3TMIWTg%2BFnDqcGTo47eRr3gSKfzUsIExopYUmetKwANbvtLfmZBglIDFZ74ISXY4jL9cgksb10Sfp03axZzkl3C6VjWOaJShiobEhzfG7NaYK8E%2FnpUd1aY8oRhh5kn2PM9Zh32U650uvB65MsCiHkKaXGofAqVu4MfkE8ar3hvIw5eJebXt&X-Amz-Signature=2531fb0e2d27eceed22c2448e8b329b8b8e945b2e1feedb79f9395fced2937fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX6OKYWK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T032309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFn4%2Fet0xW851qT6G4JMGlVCjmrxUnkzprMu6jNOTc1%2BAiAGvEOMyEgpRIs11JNbHric6BnaCOh%2B0RhoYPL5J2%2BhqyqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvfWWCN%2BNd2QNPB%2FyKtwDcE9Gx2kJahGp%2BtPeDi%2FoTo3XAnojG8FpkiaKEteemLwhAjFuKmulIiiDoiKY3w%2BL7c79K0Igzh6OfQVloBIvnC6nRX21AnIalISwuuh6E%2FGOsSPs0W6SkTz%2BtyaqmXFuIkS4nR7WSyyBboTvjCODRzOP9b4ofT%2Fo1YaCQyj3dxUl4M0mFduM67SRPIRaXlXJPaeHz9rmWFh%2BcpfIw322xP3nHlPT99HXjmppSiGnHWTy4A%2BbbpUpSti%2FK3dUAv5%2FNbV3I%2BjsWN2hWrR617isVuAgqYUPP1oKkh%2BSCiI28jpETpLV3rxbQbJQ1vWjeJFkSeh2Fu2QxsrF%2BUsbqBeW3xhzgwKYvmMowJS4F6KclVSuF7l4fnb65OmyKuLIoW8VF8XyZPPP71cUyJx9iNxYofhuIkbBvZ%2Br7uLONXTDERg5IIFP6qfTHj0GExgP4QlSvjkDmyPdKdbUl3OH7sz0gLZXxksLiaOK7ZyZy%2FLWwSWamG12RgRT2C%2B%2BrLVjQjGYlGLlOwaPhnt6iZ8r19OB%2BZk008uCIGX%2B1nU%2F%2FiLgL%2BcOiyuwWJJ4DJCR1WBKYM7YBTyzxRSTC%2By9ZsD5YvQuT1%2BVIqVRUBiDMePM7EHg7TIvbbb%2FLNBoeo2A4BkwvLfnvwY6pgHJwJd3SZRjx1EgpmNZLdyXakrGO2%2BaLuGn5%2FahNBCa3TMIWTg%2BFnDqcGTo47eRr3gSKfzUsIExopYUmetKwANbvtLfmZBglIDFZ74ISXY4jL9cgksb10Sfp03axZzkl3C6VjWOaJShiobEhzfG7NaYK8E%2FnpUd1aY8oRhh5kn2PM9Zh32U650uvB65MsCiHkKaXGofAqVu4MfkE8ar3hvIw5eJebXt&X-Amz-Signature=0788eddbe8eeee1ebfc879166fc0d272a0610d4b0e0112fc0857bca09ac5411e&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
