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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UISPVW5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZgjHnmgXSYDQvM96e0FwmjtURv3xLkvK9JNa3W6mfYAIhAIfXvc7BvxY0BDN2hvMxqE6MrIPLlqbwxdnK8wqRkDobKv8DCD8QABoMNjM3NDIzMTgzODA1IgxhPOwq3dCIPbHCAa0q3AMGQB953eZ9c3QUDUuN2itVirp5NO5Epo6dvLtrd4AS%2FTFtgbxo6nIuk%2FeUWXHLdMMbvkrQocb8ud5PUalFXN%2BSHeJjtbzp9yvd%2FglUFz1PSWRawEgmNKXlCNpl1tYcELeDo9kLncAKxH5ASha44tVYAcVhrrnQyvis3bgH4buicpJ5YretVuo3S9MkBtZ0NeTwAHrvcX%2BMOPT2%2FYmztlzCL5BF8YjvbElxHf8px%2FbvZYnxGdFFwlJsM5No1m3GJ5K1OH0VTVnWknmOh8ysXhM24%2B%2FH0jCUam3QE%2FGJzIxok22zDMO6RaOb2l%2BiD2pyUnBzXjUzbBMYot6FPBC5iqtjti%2FpW6ktpqeY2bi6JfbqLQXcYZANLcO%2FX5adBHrkv0TkBBuPCRMQQFTrex4MHw0qOs58hpvuczSYD2241TyVOQRTNNRfAiH%2Bik2URrow285%2FybAaaaePtoBMSovk%2BPUATRKwfUcII8lgZ%2BdYx14ZsEjumNx6AKBoCYOcJN6%2Be1WdIKzhvWWLTJUk%2FBm2oMrRYYAzTbitnkEiP1XiJX0PciHbDD574uhc%2FN6SA6N%2FTYEMeDQKfsYL8WaElL%2Fy7xn%2Ba6Xjcy6d8I9o%2FCIu8tDyDBgMQHc1Btn5mr323jDEiv2%2FBjqkAUv7%2FDUziK6MIBnMRXxZflVoBs6reAnUxd%2FXlsYll8gWg9wnS62sxeXzcBv6kvQpjdSEb5ZnEZ8HD0n%2BLJ%2F5Huzf5xeBQ9Nym2zbXRQY8MW0x%2F%2Bx4SsJMhpHODwwxlXQLgqIhT3gX%2BaFSw8OPfucCeZtt1bELg1kWXuhxMxYcJ0Frw8vyD8OaUMsljGTKjc4rZXNdYiMcNkc53z8Q8ZpUOCp75Hb&X-Amz-Signature=3e39c6f953a618bb4363caff3370bbb97b062ed1cf757e9803f8848e97d6118c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UISPVW5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T061230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZgjHnmgXSYDQvM96e0FwmjtURv3xLkvK9JNa3W6mfYAIhAIfXvc7BvxY0BDN2hvMxqE6MrIPLlqbwxdnK8wqRkDobKv8DCD8QABoMNjM3NDIzMTgzODA1IgxhPOwq3dCIPbHCAa0q3AMGQB953eZ9c3QUDUuN2itVirp5NO5Epo6dvLtrd4AS%2FTFtgbxo6nIuk%2FeUWXHLdMMbvkrQocb8ud5PUalFXN%2BSHeJjtbzp9yvd%2FglUFz1PSWRawEgmNKXlCNpl1tYcELeDo9kLncAKxH5ASha44tVYAcVhrrnQyvis3bgH4buicpJ5YretVuo3S9MkBtZ0NeTwAHrvcX%2BMOPT2%2FYmztlzCL5BF8YjvbElxHf8px%2FbvZYnxGdFFwlJsM5No1m3GJ5K1OH0VTVnWknmOh8ysXhM24%2B%2FH0jCUam3QE%2FGJzIxok22zDMO6RaOb2l%2BiD2pyUnBzXjUzbBMYot6FPBC5iqtjti%2FpW6ktpqeY2bi6JfbqLQXcYZANLcO%2FX5adBHrkv0TkBBuPCRMQQFTrex4MHw0qOs58hpvuczSYD2241TyVOQRTNNRfAiH%2Bik2URrow285%2FybAaaaePtoBMSovk%2BPUATRKwfUcII8lgZ%2BdYx14ZsEjumNx6AKBoCYOcJN6%2Be1WdIKzhvWWLTJUk%2FBm2oMrRYYAzTbitnkEiP1XiJX0PciHbDD574uhc%2FN6SA6N%2FTYEMeDQKfsYL8WaElL%2Fy7xn%2Ba6Xjcy6d8I9o%2FCIu8tDyDBgMQHc1Btn5mr323jDEiv2%2FBjqkAUv7%2FDUziK6MIBnMRXxZflVoBs6reAnUxd%2FXlsYll8gWg9wnS62sxeXzcBv6kvQpjdSEb5ZnEZ8HD0n%2BLJ%2F5Huzf5xeBQ9Nym2zbXRQY8MW0x%2F%2Bx4SsJMhpHODwwxlXQLgqIhT3gX%2BaFSw8OPfucCeZtt1bELg1kWXuhxMxYcJ0Frw8vyD8OaUMsljGTKjc4rZXNdYiMcNkc53z8Q8ZpUOCp75Hb&X-Amz-Signature=838d3338583861ebf684c1146c97064597aa4067eb7a02e9a60bb8e3423476f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
