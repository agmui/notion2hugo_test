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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6DDU34%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCII7wSASv1Qk9ehlOh0qpXBeNGmoG2pX3EnxNk9hp7VQIgd9wFd4QMUnUZ0S6oJy%2FcwKQlLYqtGtx6lCKtGBJ6ITEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfMAhEqayyv33%2B9sCrcA4g%2Fpv3ohwWOM7xhnqsWppGFoSgHOUssLCAImUGCO4Tjiz00rSBmLxYOaZC7b0V1YMLQyGthlNGP3RrkdfUS9bEvW04rXxN3PpNK%2Bs%2FOR0oq2BIVohIJLg%2F4Z%2FkgRCRws0kmcfFAg8EmNiRXWhzA1m7sz18szjSnqJo2zhl23ZibF6uvfc%2FAC%2B2ds8V%2FZzZUs2u7QrKq7oWFzcqT2Wqrhrj641vld57Eqc0n5cKbfw2Da%2BN9BydDVQSbsJEDKY2x8zpTqGeEqJomZBiz%2BgiHTqAigcKgaMm0swpQr6HxyZDWaUpYfDeOEUtIy7J13XCva3aMp61UQRt7RFsfgxGBBGvo83EdslcZswwtCgDa1x2NNFNuDhW2uzxfwcnnRzOGf9MDbVMNECSGluhZ1IcWiUJcI%2F3kIGHOPWk%2FLICV8YbAxSzqAotIRto%2F6jwPwfVxpce%2FJGV72j93IjlWhQgYnO02t56tZiiUlUnbYPS0t8mYKRKiC7XE2WZAuhZ8RP%2Fg7l1R%2Fm2YVmgxhnU4mBeAxROwSDnODJvzIQEqWXEfN%2B4%2FxydnyLIiDi0lzAMkJyLH0ZK1PqNbISJyqCFAgWT%2FxpCYkvP42%2FLvT1ewF7UqYmVtzzrRk34D3DjwuGkCMMnV0sIGOqUB%2BzPCmTkfwKHxPMIIoXuziFu9LBHC1SRsjFN0Ys7kqzKOoeoQWGH1jSrJws7Dco1GEUBt80AVXqelY6dKDINeKDwE1QHrcWmKy%2F7vEZKER10JG%2BEWXYFpGKlKWIEDVRqacPfqvAeUtYqf9jiJeGotNVEBMknBAuJLy2hxq%2BxpVJkAUQv67P56BxAgHw5nRtQmbLyviPMlbpMUvDZKGSufRJwhtUrj&X-Amz-Signature=71a5631df8585ae8868294fa9771f7fa6f17e024f81b01b5e3ea34c2e13819b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC6DDU34%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T004240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCII7wSASv1Qk9ehlOh0qpXBeNGmoG2pX3EnxNk9hp7VQIgd9wFd4QMUnUZ0S6oJy%2FcwKQlLYqtGtx6lCKtGBJ6ITEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOfMAhEqayyv33%2B9sCrcA4g%2Fpv3ohwWOM7xhnqsWppGFoSgHOUssLCAImUGCO4Tjiz00rSBmLxYOaZC7b0V1YMLQyGthlNGP3RrkdfUS9bEvW04rXxN3PpNK%2Bs%2FOR0oq2BIVohIJLg%2F4Z%2FkgRCRws0kmcfFAg8EmNiRXWhzA1m7sz18szjSnqJo2zhl23ZibF6uvfc%2FAC%2B2ds8V%2FZzZUs2u7QrKq7oWFzcqT2Wqrhrj641vld57Eqc0n5cKbfw2Da%2BN9BydDVQSbsJEDKY2x8zpTqGeEqJomZBiz%2BgiHTqAigcKgaMm0swpQr6HxyZDWaUpYfDeOEUtIy7J13XCva3aMp61UQRt7RFsfgxGBBGvo83EdslcZswwtCgDa1x2NNFNuDhW2uzxfwcnnRzOGf9MDbVMNECSGluhZ1IcWiUJcI%2F3kIGHOPWk%2FLICV8YbAxSzqAotIRto%2F6jwPwfVxpce%2FJGV72j93IjlWhQgYnO02t56tZiiUlUnbYPS0t8mYKRKiC7XE2WZAuhZ8RP%2Fg7l1R%2Fm2YVmgxhnU4mBeAxROwSDnODJvzIQEqWXEfN%2B4%2FxydnyLIiDi0lzAMkJyLH0ZK1PqNbISJyqCFAgWT%2FxpCYkvP42%2FLvT1ewF7UqYmVtzzrRk34D3DjwuGkCMMnV0sIGOqUB%2BzPCmTkfwKHxPMIIoXuziFu9LBHC1SRsjFN0Ys7kqzKOoeoQWGH1jSrJws7Dco1GEUBt80AVXqelY6dKDINeKDwE1QHrcWmKy%2F7vEZKER10JG%2BEWXYFpGKlKWIEDVRqacPfqvAeUtYqf9jiJeGotNVEBMknBAuJLy2hxq%2BxpVJkAUQv67P56BxAgHw5nRtQmbLyviPMlbpMUvDZKGSufRJwhtUrj&X-Amz-Signature=51def6cdf95534659d78e4301d770b6e6fa833ea1f789016a3b749cf0d88996c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
