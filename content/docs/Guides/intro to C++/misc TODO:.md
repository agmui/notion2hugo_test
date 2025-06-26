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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBHTSXZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDdm33JD%2BC1bHIeXS%2BcFsakbfoU4%2F9ChyjCHRbYDwzakAIhAMUW25dKV%2FaWXltQ527VKGoql4Q5S9WGBq1Of6dD%2BayqKv8DCFYQABoMNjM3NDIzMTgzODA1IgzW24jOHUqy%2BNmjCo4q3AMcTIeooGG1Ic8ENPVZCzTRXGl%2F62i1bva8kPPNpvC3oYoAXwgXttxKb485KRJ%2FqeKGbsZVsreaxBbxd1nACu%2BUJTV44TMuqqPIhyllirqx7ex3ZYy9C6S5eG5fL%2BgXileiT0KwX1y3RVf8kBpSaRecJzjkw5FZ6JsvFrGqctPcxYRZ2mtklh%2F35YW67UXH4c2OpdhIKmh54tCl2rFpLcBooi0EGHp3QVUrJfrJuLdSmZP3yPwsg%2BvcIC7nwIwV8NPzfYlXdQL8GXwkz0K90CIgxfwO%2BASvOYPHhgytybk%2BcoHUtok3ioVa%2FpF67Mz26dJls%2FzW%2FMoF%2B%2BiVszG%2FpEWPO4w%2FEUQ22Q5Q9H20ogrUZZx5RE1MxMF2mdSsRyCLxTMYQJvpA%2BCjYpA8l9FsNRS8V0QNJjGGCCDzyi%2FReLD9gEABSUPcAFaZJs6LEUP5DI87Tf6Ejsh4jitPSi0apVQ9rn3i4JklhvA75Dqfvk%2FByTx%2FlKVeefrals9WcZmWLwTECvwcZn3Z7kKPSvrDg6T5i1KF2aOoNa63pHqyAKnyOR5NuHjY2TOjDJ01YGl65YXc85zIqIR4anuO%2BxjhIxjGpnDE38cRTTnSTCtF116piz02XP09JXRHIKU7%2FTCKs%2FPCBjqkAcXWbXIcU0HLalbKdTQJwivHzdF%2Fo5xj1%2FUDjCsW516rk%2F2zVGliDuVCAxjOfjboZVTJNuEf3QoX0vqPU2y8acIhWuV70NSryvX7J6ZEJ%2FIXQQWqPyL2szHRjZublszRIiitozMV6mJKy%2FFIoKaKIvvcYBkT%2F8BHveogG0ZP0RQ%2FSGuNbC184B0wbghnnXA3amJUb%2FGx3KKEmR0CYD5upzay%2FwiJ&X-Amz-Signature=6a85aa46cb2b95c7f624d10e6d26894a4d2ca93300d94c08f57b14dd1c36a734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTBHTSXZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQDdm33JD%2BC1bHIeXS%2BcFsakbfoU4%2F9ChyjCHRbYDwzakAIhAMUW25dKV%2FaWXltQ527VKGoql4Q5S9WGBq1Of6dD%2BayqKv8DCFYQABoMNjM3NDIzMTgzODA1IgzW24jOHUqy%2BNmjCo4q3AMcTIeooGG1Ic8ENPVZCzTRXGl%2F62i1bva8kPPNpvC3oYoAXwgXttxKb485KRJ%2FqeKGbsZVsreaxBbxd1nACu%2BUJTV44TMuqqPIhyllirqx7ex3ZYy9C6S5eG5fL%2BgXileiT0KwX1y3RVf8kBpSaRecJzjkw5FZ6JsvFrGqctPcxYRZ2mtklh%2F35YW67UXH4c2OpdhIKmh54tCl2rFpLcBooi0EGHp3QVUrJfrJuLdSmZP3yPwsg%2BvcIC7nwIwV8NPzfYlXdQL8GXwkz0K90CIgxfwO%2BASvOYPHhgytybk%2BcoHUtok3ioVa%2FpF67Mz26dJls%2FzW%2FMoF%2B%2BiVszG%2FpEWPO4w%2FEUQ22Q5Q9H20ogrUZZx5RE1MxMF2mdSsRyCLxTMYQJvpA%2BCjYpA8l9FsNRS8V0QNJjGGCCDzyi%2FReLD9gEABSUPcAFaZJs6LEUP5DI87Tf6Ejsh4jitPSi0apVQ9rn3i4JklhvA75Dqfvk%2FByTx%2FlKVeefrals9WcZmWLwTECvwcZn3Z7kKPSvrDg6T5i1KF2aOoNa63pHqyAKnyOR5NuHjY2TOjDJ01YGl65YXc85zIqIR4anuO%2BxjhIxjGpnDE38cRTTnSTCtF116piz02XP09JXRHIKU7%2FTCKs%2FPCBjqkAcXWbXIcU0HLalbKdTQJwivHzdF%2Fo5xj1%2FUDjCsW516rk%2F2zVGliDuVCAxjOfjboZVTJNuEf3QoX0vqPU2y8acIhWuV70NSryvX7J6ZEJ%2FIXQQWqPyL2szHRjZublszRIiitozMV6mJKy%2FFIoKaKIvvcYBkT%2F8BHveogG0ZP0RQ%2FSGuNbC184B0wbghnnXA3amJUb%2FGx3KKEmR0CYD5upzay%2FwiJ&X-Amz-Signature=596b804be9965f41a6e4202d4cf94451572d9247b6ef308aa72d12a186f6b418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
