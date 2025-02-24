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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTUJJJWU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwvZn%2BPlPPoKaoNsIkkA4%2B0vJwBa2k0Eq7ko%2BgH6SjCAiAIlOj9umx97RZP5UPYWBzcUVMLY2uxGmVZvwZI81r7dyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5iFH7H3bVF4JECPHKtwDhKvlBQfS3Mh1hKgCnEplM%2BpD%2BtL%2FfO9kiy2%2BHv293Ibt5QrOxM0M2o0YetzF9Zlv7fi2JL6wB%2BDRvscZB%2F1RwBftmQMqvphudtlVgjdcXjU15RsUUkwGku3os5P1BycqyjRyXWWiBuAkgIgOBnT6rFwhLxAW0IePSlDyil%2FeS%2FwE8kXG0BlwZ3oPa008cU69lUaqGuOIxfPn8S4nfwFy9n0I5jvUAX%2Bwl8M50%2B5MzN1Z9G1%2BZJj3Hraezd0PYCaV7py0sLxQY8mJ9ZNAKA2mjqIgCGOVa8pZLhuHHunnfZ%2FRvKFDMdfkKqxv8cmNSu5T0bQvL%2FNwubpNNXR1JyXs3Xuy6VxnhqxiwfMPYy7fom0YiGn2bJcfuyJbBZ9uM9c3y1l3%2FEIPf1OnO%2Bpawdlf7TbLMkulp78U4V8IYasbAfvMCfuRriIHa9dudfkp5wkdEaWR9v%2BsXxKRsPOQQKVBwjkOvoOoDSk7kPVG4xEpTHNm605vNgBpGKwq7cD%2Ff594qtnOZgKBuc7UN96cQPPR4fmCq6hx5iEp3cZjqXRstU2dYn5ymhlg%2FyCXmkM8WZuUOqap4oC4ltVMTw3E%2BIjtlnxvws3mkxshrEOYG%2BSnOhEZtTbywMLggtD9giUwzdXzvQY6pgE%2F2rV7UqQ4fXooN3HAfiQmwicn5rhVLeV3o61Hr5PBJG0I2HZZCvDWWK0r7D9GKvOk%2FPg1mcnCMvqvq3Ru68dU2nOQK%2B6yFAFK33fcs7OXBpqa29Pw8IIxZPGFSLEt9E5UsuinDlhZv%2FDXOSLOtGSjX3cmYKj1mnWDn6rhu63yxerB4Dpyq543QkELDFw4v3v%2FB78ziO3CiczeG3tnD1AYkMkkDRlA&X-Amz-Signature=bf2c2499fddf0948e6acc8b42c250cef626febbaef7a8eb2fd0306795d65bc44&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTUJJJWU%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T230738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAwvZn%2BPlPPoKaoNsIkkA4%2B0vJwBa2k0Eq7ko%2BgH6SjCAiAIlOj9umx97RZP5UPYWBzcUVMLY2uxGmVZvwZI81r7dyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIM5iFH7H3bVF4JECPHKtwDhKvlBQfS3Mh1hKgCnEplM%2BpD%2BtL%2FfO9kiy2%2BHv293Ibt5QrOxM0M2o0YetzF9Zlv7fi2JL6wB%2BDRvscZB%2F1RwBftmQMqvphudtlVgjdcXjU15RsUUkwGku3os5P1BycqyjRyXWWiBuAkgIgOBnT6rFwhLxAW0IePSlDyil%2FeS%2FwE8kXG0BlwZ3oPa008cU69lUaqGuOIxfPn8S4nfwFy9n0I5jvUAX%2Bwl8M50%2B5MzN1Z9G1%2BZJj3Hraezd0PYCaV7py0sLxQY8mJ9ZNAKA2mjqIgCGOVa8pZLhuHHunnfZ%2FRvKFDMdfkKqxv8cmNSu5T0bQvL%2FNwubpNNXR1JyXs3Xuy6VxnhqxiwfMPYy7fom0YiGn2bJcfuyJbBZ9uM9c3y1l3%2FEIPf1OnO%2Bpawdlf7TbLMkulp78U4V8IYasbAfvMCfuRriIHa9dudfkp5wkdEaWR9v%2BsXxKRsPOQQKVBwjkOvoOoDSk7kPVG4xEpTHNm605vNgBpGKwq7cD%2Ff594qtnOZgKBuc7UN96cQPPR4fmCq6hx5iEp3cZjqXRstU2dYn5ymhlg%2FyCXmkM8WZuUOqap4oC4ltVMTw3E%2BIjtlnxvws3mkxshrEOYG%2BSnOhEZtTbywMLggtD9giUwzdXzvQY6pgE%2F2rV7UqQ4fXooN3HAfiQmwicn5rhVLeV3o61Hr5PBJG0I2HZZCvDWWK0r7D9GKvOk%2FPg1mcnCMvqvq3Ru68dU2nOQK%2B6yFAFK33fcs7OXBpqa29Pw8IIxZPGFSLEt9E5UsuinDlhZv%2FDXOSLOtGSjX3cmYKj1mnWDn6rhu63yxerB4Dpyq543QkELDFw4v3v%2FB78ziO3CiczeG3tnD1AYkMkkDRlA&X-Amz-Signature=3558edef45acb1362b6f6814cd4625e6222b89c8dc5057af01c644f5376110e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
